import * as fs from 'fs';
import * as path from 'path';
import { CustomResource, Arn, Stack } from 'aws-cdk-lib';
import { IRole, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Function } from 'aws-cdk-lib/aws-lambda';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { CalendarSetupFunction } from './calendar-setup-function';

/**
 * Options for creating a calendar object.
 */
export interface CalendarLocationOptionsBase {
  /**
   * The name of the calendar file.
   */
  readonly calendarName: string;
}

/**
 * Options for creating a calendar from a local file path
 */
export interface LocalPathOptions extends CalendarLocationOptionsBase {
  /**
   * The relative path to the calendar file.
   */
  readonly calendarPath: string;
}

/**
 * Options for creating a calendar from a file in a S3 Bucket.
 */
export interface S3LocationOptions extends CalendarLocationOptionsBase {
  /**
   * The bucket where the calendar is stored.
   */
  readonly bucket: IBucket;

  /**
   * The role used for getting the calendar file.
   *
   * @default - A role created by the Custom Resource.
   */
  readonly role?: IRole;
}

/**
 * The source types for the calendar file.
 */
export enum CalendarSourceType {
  /**
   * The calendar source is an S3 Bucket.
   */
  S3_OBJECT = 's3Object',

  /**
   * The calendar source is a local path.
   */
  PATH = 'path',
}

/**
 * The calendar for determining if pipeline stage should be open or closed.
 */
export abstract class Calendar {
  /**
   * Creates a calendar from a local file.
   */
  public static path(options: LocalPathOptions): Calendar {
    return new (class extends Calendar {
      public _bind(scope: Construct): Calendar {
        const calendarBody = fs.readFileSync(
          path.join(options.calendarPath, options.calendarName),
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

  /**
   * Creates a calendar from a S3 bucket.
   */
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

  /**
   * The name of the calendar.
   */
  public calendarName!: string;

  /**
   * The ARN of the calendar in SSM.
   */
  public calendarArn!: string;

  protected constructor() {}

  /**
   *
   * @internal
   */
  public abstract _bind(scope: Construct): any;
}

/**
 * Options for defining a CustomResourceCalendar
 */
interface CustomResourceCalendarOptions extends CalendarLocationOptionsBase {
  /*
   * The type of calendar source.
   */
  sourceType: CalendarSourceType;

  /**
   * The contents of the calendar.
   *
   * @default - None. If this is empty, the calendar is being fetched from S3.
   */
  calendarBody?: string;

  /**
   * The S3 bucket where the calendar file is stored.
   *
   * @default - None. If this is empty, the calendar is being fetched from a local file path.
   */
  bucketName?: string;

  /**
   * The role used for getting the calendar file.
   *
   * @default - None. If this is empty, the calendar is either being fetched from a local file path or the S3 session
   * will be created with the credentials already in use.
   */
  roleArn?: string;
}

/**
 * The custom resource for getting the calendar and uploading it to SSM.
 */
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
        bucketName: options.bucketName,
        calendarName: options.calendarName,
        roleArn: options.roleArn,
      },
    });
  }

  public _bind() {}
}
