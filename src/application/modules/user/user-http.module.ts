import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { UserRepository } from 'src/infra/repository/user-repository';
import { UserService } from 'src/application/services/user.service';
import { UserController } from 'src/application/controllers/user.controller';

@Module({
  imports: [UserModule],
  providers: [UserRepository, UserService],
  controllers: [UserController],
})
export class UserHttpModule {}
