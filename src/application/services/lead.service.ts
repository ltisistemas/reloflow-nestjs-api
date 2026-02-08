import { Injectable } from '@nestjs/common';
import { LeadCreateDto } from 'src/domain/entities/leads/lead-create-dto';
import { LEAD_POSITION } from 'src/domain/entities/leads/lead-position.enum';
import { LeadUpdateDto } from 'src/domain/entities/leads/lead-update-dto';
import { Lead } from 'src/domain/entities/leads/lead.modal';
import { LeadRepository } from 'src/infra/repository/lead-repository';

@Injectable()
export class LeadService {
  constructor(private repository: LeadRepository) {}

  findAll(company_id: string) {
    return this.repository.findAll(company_id);
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  create(dto: LeadCreateDto) {
    return this.repository.create(dto);
  }

  update(id: string, dto: Lead) {
    return this.repository.update(id, dto);
  }
}
