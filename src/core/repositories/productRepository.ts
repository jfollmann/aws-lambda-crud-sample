import { BaseRepository } from "./base/baseRepository";
import { schema } from "./schemas/productSchema";

export class ProductRepository extends BaseRepository {

  constructor() {
    super({ schema })
  }
}
