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
    const data = JSON.parse(event[validate.argType]);
    const { value, isValid, errors } = validateEvent(data, validate.rules || {})

    if (!isValid) {
      return StatusHandler.handleError({ statusCode: BAD_REQUEST, errors: { errors } });
    }

    return handler(value, context)
  }
}

const validateDefinition = (e, schema) => {
  const { value } = schema.validate(e, { abortEarly: false });

  return value;
}

const validateEvent = (e, schema) => {
  const { error, value } = schema.validate(e, { abortEarly: false, errors: { wrap: { label: '' } } });
  const isValid = (!error)

  const errors = isValid ? null : error.details.map((detail: any) => {
    return { key: detail.context.key, message: detail.message };
  })

  return { value, isValid, errors };
}