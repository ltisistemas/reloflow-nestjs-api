import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { LEAD_STATUS } from './lead-status.enum';
import { Company } from './company.modal';
import { LEAD_POSITION } from './lead-position.enum';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'leads' })
@Entity('leads')
export class Lead {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @ApiProperty({ nullable: true })
  company_id: string;

  @Column()
  @ApiProperty({ nullable: true })
  name: string;

  @Column({ type: 'money', nullable: true, name: 'renda_familiar' })
  @ApiProperty({ nullable: true })
  rendaFamiliar?: number;

  @Column({ type: 'varchar', nullable: true })
  @ApiProperty({ nullable: true })
  zipCode?: string;

  @Column({ type: 'varchar', nullable: true })
  @ApiProperty({ nullable: true })
  streetAddress?: string;

  @Column({ type: 'varchar', nullable: true })
  @ApiProperty({ nullable: true })
  streetAddressNumber?: string;

  @Column({ type: 'varchar', nullable: true })
  @ApiProperty({ nullable: true })
  streetAddressComplement?: string;

  @Column({ type: 'varchar', nullable: true })
  @ApiProperty({ nullable: true })
  neighborhood?: string;

  @Column({ type: 'varchar', nullable: true })
  @ApiProperty({ nullable: true })
  city?: string;

  @Column({ type: 'varchar', nullable: true })
  @ApiProperty({ nullable: true })
  state?: string;

  @Column({ type: 'varchar', nullable: true })
  @ApiProperty({ nullable: true })
  country?: string;

  @Column({ type: 'varchar', nullable: true, name: 'distrito_selecionado' })
  @ApiProperty({ nullable: true })
  distritoSelecionado?: string;

  @Column({ type: 'varchar', nullable: true, name: 'ciades_pretendidas' })
  @ApiProperty({ nullable: true })
  cidadesPretendidas?: string;

  @Column({ type: 'decimal', nullable: true, name: 'valor_inicial_renda' })
  @ApiProperty({ nullable: true })
  valorInicialRenda?: number;

  @Column({ type: 'decimal', nullable: true, name: 'valor_final_renda' })
  @ApiProperty({ nullable: true })
  valorFinalRenda?: number;

  @Column({
    type: 'int',
    nullable: true,
    name: 'quantidade_membros_na_familia',
  })
  @ApiProperty({ nullable: true })
  quantidadeMembrosNaFamilia?: number;

  @Column({
    type: 'int',
    nullable: true,
    name: 'quantidade_de_filhos',
  })
  @ApiProperty({ nullable: true })
  quantidadeFilhos?: number;

  @Column({
    type: 'varchar',
    nullable: true,
    name: 'idade_dos_filhos',
  })
  @ApiProperty({ nullable: true })
  idadeDosFilhos?: string;

  @Column({ default: LEAD_STATUS.ACTIVE, type: 'enum', enum: LEAD_STATUS })
  @ApiProperty({ nullable: true })
  status: LEAD_STATUS;

  @Column({
    default: LEAD_POSITION.CAPTACAO,
    type: 'enum',
    enum: LEAD_POSITION,
  })
  @ApiProperty({ nullable: true })
  position: LEAD_POSITION;

  @Index()
  @ManyToOne(() => Company, (company) => company.leads, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @CreateDateColumn({
    type: 'time with time zone',
    default: () => 'NOW()',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'time with time zone',
    default: () => 'NOW()',
    name: 'updated_at',
  })
  updatedAt: Date;

  @ApiProperty({ nullable: true })
  @DeleteDateColumn({
    type: 'time with time zone',
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt?: Date;
}
