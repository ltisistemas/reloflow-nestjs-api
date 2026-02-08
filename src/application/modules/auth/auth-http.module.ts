import { UserRepository } from 'src/infra/repository/user-repository';
import { AuthModule } from './auth.module';
import { AuthService } from 'src/application/services/auth.service';
import { AuthController } from 'src/application/controllers/auth.controller';
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { UserService } from 'src/application/services/user.service';

@Module({
  imports: [AuthModule, UserModule],
  providers: [UserRepository, AuthService, UserService],
  controllers: [AuthController],
})
export class AuthHttpModule {}
