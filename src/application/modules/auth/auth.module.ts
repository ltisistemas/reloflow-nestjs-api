import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from 'src/domain/entities/leads/company.modal';
import { Lead } from 'src/domain/entities/leads/lead.modal';
import { User } from 'src/domain/entities/user/user';

@Module({
  imports: [TypeOrmModule.forFeature([User, Company, Lead])],
  exports: [TypeOrmModule],
})
export class AuthModule {}
