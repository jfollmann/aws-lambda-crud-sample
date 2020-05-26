import joi from "@hapi/joi";
import { Context, APIGatewayProxyEvent } from "aws-lambda";
import { BAD_REQUEST } from "http-status-codes";
import { StatusHandler } from "../../../utils/responseHandler";
import { handlerValidatorParams } from "./validationTypes";

const schema = joi.object({
  validate: joi.object({
    argType: joi.string(),
    e: joi.object(),
  }),
  handler: joi.func().maxArity(2)
})

export const handlerValidator = (params: handlerValidatorParams) => {
  const { validate = {}, handler } = validateDefinition(params, schema)

  return async (event: APIGatewayProxyEvent, context: Context) => {
    console.log('eventData', typeof event[validate.argType]);
    const data = typeof event[validate.argType] === 'string'
      ? JSON.parse(event[validate.argType])
      : event[validate.argType];

    const { value, isValid, errors } = validateEvent(data, validate.argType, validate.rules || {})

    if (isValid) {
      event[validate.argType] = value;
      return handler(event, context)
    }

    return StatusHandler.handleError({ statusCode: BAD_REQUEST, errors: { errors } });
  }
}

const validateDefinition = (e, schema) => {
  const { value } = schema.validate(e, { abortEarly: false });

  return value;
}

const validateEvent = (e, path, schema) => {
  const { error, value } = schema.validate(e, { abortEarly: false, errors: { wrap: { label: '' } } });
  const isValid = (!error)

  const errors = isValid ? null : error.details.map((detail: any) => {
    return { key: detail.context.key, path, message: detail.message };
  })

  return { value, isValid, errors };
}
