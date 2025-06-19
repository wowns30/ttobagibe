import { Controller, Get, Post, Param, Delete, Body, Put } from '@nestjs/common';
import { MatchService } from './match.service';
import { Prisma } from '@prisma/client';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get()
  findAll() {
    return this.matchService.findAll();
  }

  @Post()
  create(@Body() data: Prisma.MatchCreateInput) {
    return this.matchService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchService.findOne(+id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.matchService.delete(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.MatchUpdateInput) {
    return this.matchService.update(+id, data);
  }
}
