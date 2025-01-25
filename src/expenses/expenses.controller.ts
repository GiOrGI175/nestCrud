import { Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  create() {
    return;
  }

  @Get()
  findAll() {
    return this.expensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.expensesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id) {
    return this.expensesService.update(id);
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return this.expensesService.remove(id);
  }
}
