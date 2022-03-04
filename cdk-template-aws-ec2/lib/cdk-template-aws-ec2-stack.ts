import * as ec2 from '@aws-cdk/aws-ec2';
import { Duration, Stack, StackProps } from 'aws-cdk-lib';
// import * as sns from 'aws-cdk-lib/aws-sns';
// import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';


// import { Vpc } from 'aws-cdk-lib/aws-ec2';

export class CdkTemplateAwsEc2Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // const queue = new sqs.Queue(this, 'CdkTemplateAwsEc2Queue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });

    const vpc = new ec2.Vpc(this, 'Vpc');

    // const topic = new sns.Topic(this, 'CdkTemplateAwsEc2Topic');

    // topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
