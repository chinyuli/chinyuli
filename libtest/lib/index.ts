import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface LibtestProps {
  // Define construct properties here
}

export class Libtest extends Construct {

  constructor(scope: Construct, id: string, props: LibtestProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'LibtestQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
