import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignInDto } from 'src/domain/entities/user/sign-in.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { UserService } from '../services/user.service';
import { UserCreateDto } from 'src/domain/entities/user/user-create.dto';

@Controller('api/register')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('sing-in')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: SignInDto })
  signIn(@Body() signInDto: SignInDto) {
    return this.service.signIn(signInDto.email, signInDto.password);
  }

  @Post('sign-up')
  @HttpCode(201)
  @ApiOperation({ summary: 'Criação de um novo usuário' })
  @ApiBody({ type: UserCreateDto })
  signUp(@Body() dto: UserCreateDto) {
    return this.service.signUp(dto);
  }
}
