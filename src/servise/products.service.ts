import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getAll(): string {
    return 'get all';
  }

  getOne(id: string): string {
    return 'get one ' + id;
  }

  create(title: string, price: number): string {
    return `Title: ${title}, price: ${price}`;
  }

  update(id: string, title: string, price: number): string {
    return `Title: ${title}, price: ${price}, id: ${id}`;
  }

  remove(id: string): string {
    return 'remove ' + id;
  }
}
