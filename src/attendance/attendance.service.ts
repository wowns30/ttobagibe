import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AttendanceService {
  constructor(private prisma: PrismaService) {}

  // 전체 출석 조회
  findAll() {
    return this.prisma.attendance.findMany({
      include: {
        player: true,
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  // 출석 기록 생성
  create(data: Prisma.AttendanceCreateInput) {
    return this.prisma.attendance.create({ data });
  }

  // 출석 기록 단건 조회
  findOne(id: number) {
    return this.prisma.attendance.findUnique({
      where: { id },
      include: {
        player: true,
      },
    });
  }

  // 출석 기록 삭제
  delete(id: number) {
    return this.prisma.attendance.delete({
      where: { id },
    });
  }

  // 출석왕 TOP 5
  async top5AttendancePlayers() {
    const players = await this.prisma.player.findMany({
      include: {
        attendances: true,
      },
    });

    const ranked = players
      .map((p) => ({
        id: p.id,
        name: p.name,
        position: p.position,
        count: p.attendances.length,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return ranked;
  }

  update(id: number, data: Prisma.AttendanceUpdateInput) {
    return this.prisma.attendance.update({
      where: { id },
      data,
    });
  }
}
