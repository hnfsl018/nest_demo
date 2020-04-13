import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
 
    products = [
    { id: 1, productName: 'prodect' },
    { id: 2, productName: 'prodects' },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): any {
    console.log(' product :: ', product);
    return 'ok';
  }

  getProductById(id: number): Product {
    return this.products.find(v => v.id == id);
  }
}

export interface Product {
  id: number;
  productName: string;
}
