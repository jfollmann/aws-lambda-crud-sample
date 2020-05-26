import * as Joi from "@hapi/joi";
import { validateRules, argTypes } from "./base/validationTypes";

export const personValidator: validateRules = {
  argType: argTypes.Body,
  rules: Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required()
  })
}
