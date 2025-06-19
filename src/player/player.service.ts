import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.player.findMany({
      include: {
        attendances: true,
        matches: true,
        mvpMatches: true,
      },
    });
  }

  create(data: Prisma.PlayerCreateInput) {
    return this.prisma.player.create({ data });
  }

  delete(id: number) {
    return this.prisma.player.delete({ where: { id } });
  }
}
