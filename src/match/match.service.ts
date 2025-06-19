import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MatchService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.match.findMany({
      include: { mvp: true },
      orderBy: { date: 'desc' },
      take: 5,
    });
  }

  create(data: Prisma.MatchCreateInput) {
    return this.prisma.match.create({ data });
  }

  findOne(id: number) {
    return this.prisma.match.findUnique({
      where: { id },
      include: { mvp: true },
    });
  }

  delete(id: number) {
    return this.prisma.match.delete({ where: { id } });
  }

  update(id: number, data: Prisma.MatchUpdateInput) {
    return this.prisma.match.update({
      where: { id },
      data,
    });
  }
}
