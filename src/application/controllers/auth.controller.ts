import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignInDto } from 'src/domain/entities/user/sign-in.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('api/auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('sing-in')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: SignInDto })
  signIn(@Body() signInDto: SignInDto) {
    return this.service.signIn(signInDto.email, signInDto.password);
  }
}
