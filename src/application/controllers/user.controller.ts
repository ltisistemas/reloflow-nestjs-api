import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserCreateDto } from 'src/domain/entities/user/user-create.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../guards/auth.guard';

@ApiTags('Users')
@Controller('api/auth/user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private service: UserService) {}

  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Criação de um novo usuário' })
  @ApiBody({ type: UserCreateDto })
  async create(@Body() dto: UserCreateDto) {
    return await this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listagem de usuários' })
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consulta de usuário' })
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }
}
