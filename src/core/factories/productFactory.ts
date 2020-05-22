import { ProductRepository } from "./../repositories/productRepository";
import { ProductService } from "./../services/productService";

export class ProductFactory {

  static createInstance() {
    const repository = new ProductRepository();
    const service = new ProductService({ repository });

    return service;
  }
}
