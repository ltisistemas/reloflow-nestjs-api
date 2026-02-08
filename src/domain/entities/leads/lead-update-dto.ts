import { ApiProperty } from '@nestjs/swagger';
import { LEAD_POSITION } from './lead-position.enum';
import { LEAD_STATUS } from './lead-status.enum';

export class LeadUpdateDto {
  @ApiProperty({ nullable: true })
  name: string;
  @ApiProperty({ nullable: true })
  rendaFamiliar?: number;
  @ApiProperty({ nullable: true })
  zipCode?: string;
  @ApiProperty({ nullable: true })
  streetAddress?: string;
  @ApiProperty({ nullable: true })
  streetAddressNumber?: string;
  @ApiProperty({ nullable: true })
  streetAddressComplement?: string;
  @ApiProperty({ nullable: true })
  city?: string;
  @ApiProperty({ nullable: true })
  state?: string;
  @ApiProperty({ nullable: true })
  country?: string;
  @ApiProperty({ nullable: true, enum: LEAD_POSITION })
  position?: LEAD_POSITION;
  @ApiProperty({ nullable: true, enum: LEAD_STATUS })
  status: LEAD_STATUS;
  @ApiProperty({ nullable: true })
  deletedAt?: Date;
}
