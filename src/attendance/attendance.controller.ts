import { Controller, Get, Post, Delete, Param, Body, Put } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { Prisma } from '@prisma/client';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get()
  findAll() {
    return this.attendanceService.findAll();
  }

  @Post()
  create(@Body() data: Prisma.AttendanceCreateInput) {
    return this.attendanceService.create(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attendanceService.findOne(+id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.attendanceService.delete(+id);
  }

  @Get('top5')
  getTop5() {
    return this.attendanceService.top5AttendancePlayers();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Prisma.AttendanceUpdateInput) {
    return this.attendanceService.update(+id, data);
  }
}
