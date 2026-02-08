import { ApiProperty } from '@nestjs/swagger';

export class CompanyCreateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  tax_number: string;

  @ApiProperty()
  user_id?: string | null;
}
