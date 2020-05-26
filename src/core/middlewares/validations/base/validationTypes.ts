export const enum argTypes {
  Body = 'body',
  QueryString = 'queryStringParameters',
  PathParameters = 'pathParameters'
  //..others
}

export interface validateRules {
  argType: argTypes
  rules: {}
}

export interface handlerValidatorParams {
  validate: validateRules
  handler: (e, context) => {}
}
