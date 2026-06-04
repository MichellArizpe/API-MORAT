import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body
} from '@nestjs/common';

import { MoratService } from './morat.service';

import { CreateMoratDto } from './dto/create-morat.dto';
import { UpdateMoratDto } from './dto/update-morat.dto';

@Controller('morat')
export class MoratController {

  constructor(
    private readonly moratService: MoratService
  ) {}

  @Get()
  findAll() {
    return this.moratService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moratService.findOne(Number(id));
  }

  @Post()
  create(
    @Body() createMoratDto: CreateMoratDto
  ) {
    return this.moratService.create(
      createMoratDto
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMoratDto: UpdateMoratDto
  ) {
    return this.moratService.update(
      Number(id),
      updateMoratDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moratService.remove(Number(id));
  }
}