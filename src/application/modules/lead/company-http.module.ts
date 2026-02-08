import { Module } from '@nestjs/common';
import { LeadModule } from './lead.module';
import { LeadController } from 'src/application/controllers/Lead.controller';
import { LeadService } from 'src/application/services/lead.service';
import { LeadRepository } from 'src/infra/repository/lead-repository';

@Module({
  imports: [LeadModule],
  providers: [LeadRepository, LeadService],
  controllers: [LeadController],
})
export class LeadHttpModule {}
