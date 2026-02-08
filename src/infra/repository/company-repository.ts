import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyCreateDto } from 'src/domain/entities/leads/company-create-dto';
import { Company } from 'src/domain/entities/leads/company.modal';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyRepository {
  constructor(
    @InjectRepository(Company)
    private repository: Repository<Company>,
  ) {}

  findAll(): Promise<Company[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Company | null> {
    return this.repository.findOneBy({ id });
  }

  findByUserId(userId: string): Promise<Company[]> {
    return this.repository.find({
      where: { user: { id: userId } },
    });
  }

  async create(dto: CompanyCreateDto): Promise<Company> {
    const company = this.repository.create(dto);

    return await this.repository.save(company);
  }
}
