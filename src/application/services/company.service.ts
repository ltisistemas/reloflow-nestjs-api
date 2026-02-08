import { Injectable } from '@nestjs/common';
import { CompanyCreateDto } from 'src/domain/entities/leads/company-create-dto';
import { CompanyRepository } from 'src/infra/repository/company-repository';

@Injectable()
export class CompanyService {
  constructor(private repository: CompanyRepository) {}

  findAll() {
    return this.repository.findAll();
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  findByUserId(id: string) {
    return this.repository.findByUserId(id);
  }

  create(dto: CompanyCreateDto) {
    return this.repository.create(dto);
  }
}
