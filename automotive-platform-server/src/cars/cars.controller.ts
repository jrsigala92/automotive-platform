import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cars';
  }
}