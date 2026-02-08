import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LeadCreateDto } from 'src/domain/entities/leads/lead-create-dto';
import { LeadUpdateDto } from 'src/domain/entities/leads/lead-update-dto';
import { Lead } from 'src/domain/entities/leads/lead.modal';
import { Repository } from 'typeorm';

@Injectable()
export class LeadRepository {
  constructor(
    @InjectRepository(Lead)
    private repository: Repository<Lead>,
  ) {}

  findAll(company_id: string): Promise<Lead[]> {
    return this.repository.find({
      where: { company: { id: company_id } },
    });
  }

  findById(id: string): Promise<Lead | null> {
    return this.repository.findOneBy({ id });
  }

  async create(dto: LeadCreateDto): Promise<Lead> {
    const lead = this.repository.create(dto);

    return await this.repository.save(lead);
  }

  async update(id: string, dto: Lead): Promise<Lead | null> {
    await this.repository.update(id, dto);

    return await this.repository.findOneBy({ id });
  }
}
