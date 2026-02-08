import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { LeadService } from '../services/lead.service';
import { LeadCreateDto } from 'src/domain/entities/leads/lead-create-dto';
import { Lead } from 'src/domain/entities/leads/lead.modal';

@ApiTags('Leads')
@Controller('api/auth/lead')
@UseGuards(AuthGuard)
export class LeadController {
  constructor(private service: LeadService) {}

  @Get('/find-by-company/:id')
  @ApiOperation({ summary: 'Listagem de Leads' })
  findAll(@Param('id') id: string) {
    return this.service.findAll(id);
  }

  @Get('find-by/:id')
  @ApiOperation({ summary: 'Consultar um Lead' })
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Criação de um novo Lead' })
  @ApiBody({ type: LeadCreateDto })
  async create(@Body() dto: LeadCreateDto) {
    return await this.service.create({ ...dto });
  }

  @Put(':id')
  @HttpCode(201)
  @ApiOperation({ summary: 'Atualizar um Lead' })
  @ApiBody({ type: Lead })
  async update(@Param('id') id: string, @Body() dto: Lead) {
    return await this.service.update(id, { ...dto });
  }
}
