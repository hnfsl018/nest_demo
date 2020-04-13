import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Render,
} from '@nestjs/common';
import { ProductsService, Product } from './products.service';
import { CreateProductDto } from './products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('view')
  @Render('index')
  getView() {
    const products = this.productService.getProductById(1);
    console.log({ message: 'Hello world!', ...products })
    return { message: 'Hello world!', ...products };
  }

  //   @Get()
  //   getProduct(): Product[] {
  //     return this.productService.getProducts();
  //   }

  //   @Get('/qs')
  //   getProductByQueryString(@Query() qs: QSType) {
  //     console.log(qs);
  //     console.log(qs)
  //   }

  //   @Get(':id')
  //   getProductsById(@Param() param): Product | {} {
  //     const { id } = param;
  //     const products = this.productService.getProductById(id);
  //     if (products) return products;
  //     return {};
  //   }

  //   @Post()
  //   @UsePipes(new ValidationPipe())
  //   createProduct(@Body() body: CreateProductDto) {
  //     console.log(body)
  //   }
}

export interface QSType {
  demo: string;
}
