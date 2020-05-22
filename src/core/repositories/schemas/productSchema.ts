import { Schema as dynamooseSchema, model as dynamooseModel } from "dynamoose";

const entity = new dynamooseSchema({
  id: {
    type: String,
    required: true,
    hashKey: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
}, { timestamps: true })

export const schema = dynamooseModel(
  process.env.PRODUCT_TABLE,
  entity
);
