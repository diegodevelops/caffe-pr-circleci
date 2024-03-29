# Pipeline description

We're using CircleCI for our CI/CD pipeline, which is connected to this public Github repo, and the workflow is triggered automatically everytime we push new code to the 'main' branch.

The workflow is divided into two 'jobs':

1. **build**
2. **deploy** 

*Since the app is still in development, we are omiting a 'hold' filter, and so deployment is being done automatically right after the **build** job.

## Build 

As you can see in the screenshot below, the **build** job involves eight (8) steps:

1. Spin up environment
2. Preparing environment variables
3. Install Node.js
4. Checkout code
5. Install frontend dependencies ie. `npm install`
6. Install backend dependencies ie. `npm install`
7. Frontend build
8. Backend build

![CircleCI Build](../screenshots/circleci-build.png)

## Deploy

As you can see in the screenshot below, the **deploy** job involves eight (8) steps:

1. Spin up environment
2. Preparing environment variables
3. Install Node.js
4. Setting up Elastic Beanstalk CLI
5. Install AWS CLI
6. Configure AWS Access Keys (must be added as environment variables in CircleCI Project Settings) 
7. Checkout code
8. Deploy app

![CircleCI Deploy](../screenshots/circleci-deploy.png)

You can navigate to the circleci config file to see the jobs and steps in `/.circleci/config.yaml`.
