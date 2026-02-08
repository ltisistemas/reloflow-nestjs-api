import { Module } from '@nestjs/common';
import { CompanyModule } from './company.module';
import { CompanyController } from 'src/application/controllers/company.controller';
import { CompanyRepository } from 'src/infra/repository/company-repository';
import { CompanyService } from 'src/application/services/company.service';

@Module({
  imports: [CompanyModule],
  providers: [CompanyRepository, CompanyService],
  controllers: [CompanyController],
})
export class CompanyHttpModule {}
