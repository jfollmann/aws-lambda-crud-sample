import { Document } from "dynamoose/dist/Document";
import { Model } from "dynamoose/dist/Model";

export abstract class BaseRepository {
  schema: Model<Document>;

  constructor({ schema }) {
    this.schema = schema;
  }

  findOne = (id) => {
    return this.schema.get({ id });
  }

  findAll = () => {
    return this.schema.scan({ active: true }).exec();
  }

  create = (item) => {
    return this.schema.create(item)
  }

  updateById = (id, item) => {
    return this.schema.update({ id }, item);
  }

  delete = (id) => {
    return this.schema.update({ id }, { active: false });
  }
}
