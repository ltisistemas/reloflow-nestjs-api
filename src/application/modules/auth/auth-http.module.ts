import { UserRepository } from 'src/infra/repository/user-repository';
import { AuthModule } from './auth.module';
import { AuthService } from 'src/application/services/auth.service';
import { AuthController } from 'src/application/controllers/auth.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthModule],
  providers: [UserRepository, AuthService],
  controllers: [AuthController],
})
export class AuthHttpModule {}
