import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CompanyService } from '../services/company.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import type { Request } from 'express';
import { User } from 'src/domain/entities/user/user';
import { CompanyCreateDto } from 'src/domain/entities/leads/company-create-dto';

@ApiTags('Company')
@Controller('api/auth/company')
@UseGuards(AuthGuard)
export class CompanyController {
  constructor(private service: CompanyService) {}

  @Get()
  @ApiOperation({ summary: 'Listagem de empresas' })
  findAll(@Req() req: Request) {
    const { id } = req['user'] as User;
    return this.service.findByUserId(id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consulta de usuário' })
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Criação de uma nova empresa' })
  @ApiBody({ type: CompanyCreateDto })
  async create(@Body() dto: CompanyCreateDto, @Req() req: Request) {
    const { id } = req['user'] as User;
    return await this.service.create({ ...dto, user_id: id });
  }
}
