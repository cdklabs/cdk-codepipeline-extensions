import * as fs from 'fs';
import * as path from 'path';
import { CustomResource, Arn, Stack } from 'aws-cdk-lib';
import { IRole, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Function } from 'aws-cdk-lib/aws-lambda';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { CalendarSetupFunction } from './calendar-setup-function';

export interface CalendarLocationOptionsBase {
  readonly calendarName: string;
  readonly calendarPath?: string;
}

export interface S3LocationOptions extends CalendarLocationOptionsBase {
  readonly bucket: IBucket;
  readonly role?: IRole;
}

export enum CalendarSourceType {
  S3_OBJECT = 's3Object',
  PATH = 'path',
}

export abstract class Calendar {
  public static path(options: CalendarLocationOptionsBase): Calendar {
    return new (class extends Calendar {
      public _bind(scope: Construct): Calendar {
        const localPath = options.calendarPath
          ? options.calendarPath
          : __dirname;
        const calendarBody = fs.readFileSync(
          path.join(localPath, options.calendarName),
          { encoding: 'utf-8' }
        );

        const calendar = new CustomResourceCalendar(scope, {
          sourceType: CalendarSourceType.PATH,
          calendarBody,
          calendarName: options.calendarName,
        });

        this.calendarArn = calendar.calendarArn;
        this.calendarName = calendar.calendarName;

        return calendar;
      }
    })();
  }

  public static s3Location(options: S3LocationOptions): Calendar {
    return new (class extends Calendar {
      public _bind(scope: Construct): Calendar {
        const calendar = new CustomResourceCalendar(scope, {
          sourceType: CalendarSourceType.S3_OBJECT,
          bucketName: options.bucket.bucketName,
          calendarName: options.calendarName,
          roleArn: options.role?.roleArn,
        });

        this.calendarArn = calendar.calendarArn;
        this.calendarName = calendar.calendarName;

        return calendar;
      }
    })();
  }

  public calendarName!: string;
  public calendarArn!: string;

  protected constructor() {}

  /**
   *
   * @internal
   */
  public abstract _bind(scope: Construct): any;
}

interface CustomResourceCalendarOptions extends CalendarLocationOptionsBase {
  sourceType: CalendarSourceType;
  calendarBody?: string;
  bucketName?: string;
  roleArn?: string;
}

class CustomResourceCalendar extends Calendar {
  constructor(scope: Construct, options: CustomResourceCalendarOptions) {
    super();

    this.calendarName = options.calendarName;
    this.calendarArn = Arn.format(
      {
        service: 'ssm',
        resource: 'document',
        resourceName: options.calendarName,
      },
      Stack.of(scope)
    );

    const onEvent: Function = new CalendarSetupFunction(
      scope,
      'OnEventHandler'
    );
    onEvent.addToRolePolicy(
      new PolicyStatement({
        actions: [
          'ssm:CreateDocument',
          'ssm:UpdateDocument',
          'ssm:DeleteDocument',
        ],
        resources: [this.calendarArn],
      })
    );

    const provider = new Provider(scope, 'Provider', {
      onEventHandler: onEvent,
    });

    new CustomResource(scope, 'SSMCalendarCustomResource', {
      serviceToken: provider.serviceToken,
      properties: {
        sourceType: options.sourceType,
        calendarBody: options.calendarBody,
        calendarPath: options.calendarPath,
        calendarName: options.calendarName,
        roleArn: options.roleArn,
      },
    });
  }

  public _bind() {}
}
