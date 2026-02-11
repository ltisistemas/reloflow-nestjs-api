import { ApiProperty } from '@nestjs/swagger';

export class LeadCreateDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  company_id: string;

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
  neighborhood?: string;
  @ApiProperty({ nullable: true })
  city?: string;
  @ApiProperty({ nullable: true })
  state?: string;
  @ApiProperty({ nullable: true })
  country?: string;

  @ApiProperty({ nullable: true })
  cidadesPretendidas?: string;

  @ApiProperty({ nullable: true })
  distritoSelecionado?: string;

  @ApiProperty({ nullable: true })
  valorInicialRenda?: number;

  @ApiProperty({ nullable: true })
  valorFinalRenda?: number;

  @ApiProperty({ nullable: true })
  quantidadeMembrosNaFamilia?: number;
  @ApiProperty({ nullable: true })
  quantidadeFilhos?: number;
  @ApiProperty({ nullable: true })
  idadeDosFilhos?: string;
}
