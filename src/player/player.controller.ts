import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Prisma } from '@prisma/client';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  findAll() {
    return this.playerService.findAll();
  }

  @Post()
  create(@Body() data: Prisma.PlayerCreateInput) {
    return this.playerService.create(data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.playerService.delete(+id);
  }
}
