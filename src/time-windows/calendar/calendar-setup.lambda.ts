import { S3 } from '@aws-sdk/client-s3';
import { SSM } from '@aws-sdk/client-ssm';
import { fromTemporaryCredentials } from '@aws-sdk/credential-providers';
import type {
  OnEventRequest,
  OnEventResponse,
} from 'aws-cdk-lib/custom-resources/lib/provider-framework/types'; // eslint-disable-line import/no-unresolved
import { CalendarSourceType } from './types';

export const handler = async (
  event: OnEventRequest
): Promise<OnEventResponse> => {
  console.log('Event: %j', { ...event, ResponseURL: '...' });

  const calendarName = event.ResourceProperties.calendarName;

  const calendar = await getCalendar(calendarName, event);
  const ssm = new SSM();
  if (event.RequestType === 'Create') {
    const createDocumentResponse = await ssm.createDocument({
      Name: calendarName,
      Content: calendar,
      DocumentType: 'ChangeCalendar',
      DocumentFormat: 'TEXT',
    });
    console.log('Create document: %j', createDocumentResponse);
  }

  if (event.RequestType === 'Update') {
    const updateDocumentResponse = await ssm.updateDocument({
      Name: calendarName,
      Content: calendar,
      DocumentVersion: '$LATEST',
    });
    console.log('Update document: %j', updateDocumentResponse);
  }

  if (event.RequestType === 'Delete') {
    const deleteDocumentResponse = await ssm.deleteDocument({
      Name: calendarName,
    });
    console.log('Delete document: %j', deleteDocumentResponse);
  }

  return {};
};

async function getCalendar(
  calendarName: string,
  event: OnEventRequest
): Promise<string> {
  const bucketName = event.ResourceProperties.bucketName;
  const roleArn = event.ResourceProperties.roleArn;

  if (event.ResourceProperties.sourceType === CalendarSourceType.PATH) {
    return event.ResourceProperties.calendarBody;
  }

  const s3 = roleArn ? await getSession(roleArn) : new S3();
  const calendar = await s3
    .getObject({
      Bucket: bucketName,
      Key: calendarName,
    })
    .then((r) => r.Body?.transformToString());

  if (!calendar) {
    throw new Error('Unable to retrieve calendar.');
  }

  return calendar;
}

function getSession(roleArn: string): S3 {
  return new S3({
    credentials: fromTemporaryCredentials({
      params: {
        RoleArn: roleArn,
        RoleSessionName: 'Calendar-Setup-Role',
      },
    }),
  });
}
