import { Module } from '@nestjs/common';
import { MatchModule } from './match/match.module';
import { PrismaService } from '../prisma/prisma.service';
import { AppController } from './app.controller';
import { PlayerModule } from './player/player.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PrismaModule } from '../prisma/prisma.module';
import { AppService } from './app.service';

@Module({
  imports: [PrismaModule, MatchModule, PlayerModule, AttendanceModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
