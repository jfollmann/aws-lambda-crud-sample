import { v1 as uuid } from "uuid";

export abstract class BaseService {
  repository: any;

  constructor({ repository }) {
    this.repository = repository
  }

  findOne = (id) => {
    return this.repository.findOne(id)
  }

  findAll = () => {
    return this.repository.findAll()
  }

  create = (item) => {
    const id = uuid()
    return this.repository.create({
      ...item,
      id
    })
  }

  updateById = (id, item) => {
    return this.repository.updateById(id, item);
  }

  delete = (id) => {
    return this.repository.delete(id);
  }

}
