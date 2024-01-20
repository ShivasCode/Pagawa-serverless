export type AmplifyDependentResourcesAttributes = {
  "api": {
    "apicategories": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "apicustomer": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "apipagawa": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    }
  },
  "auth": {
    "pagawaamp": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "function": {
    "pagawacustomer": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "pagawalambda": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}