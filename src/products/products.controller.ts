import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from '../servise/products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdaProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): string {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return this.productsService.getOne(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): string {
    const { title, price } = createProductDto;
    return this.productsService.create(title, price);
  }

  @Put(':id')
  update(
    @Body() updateProductDt: UpdaProductDto,
    @Param('id') id: string,
  ): string {
    const { title, price } = updateProductDt;
    return this.productsService.update(id, title, price);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return this.productsService.remove(id);
  }
}
