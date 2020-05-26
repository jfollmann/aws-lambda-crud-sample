import joi from "@hapi/joi";
import { validateRules, argTypes } from "./base/validationTypes";

export const personValidator: validateRules = {
  argType: argTypes.Body,
  rules: joi.object({
    firstName: joi.string().min(3).required(),
    lastName: joi.string().min(3).required()
  })
}
