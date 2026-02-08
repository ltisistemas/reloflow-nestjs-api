import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { USER_STATUS } from './user-status-enu';
import { USER_GENDER } from './user-gender-enum';
import { Company } from '../leads/company.modal';

@Entity({ name: 'usuarios' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: USER_GENDER.MEN })
  gender: USER_GENDER;

  @Column({ unique: true })
  tax_number: string;

  @Column({ nullable: true })
  social_number?: string;

  @Column({ nullable: true })
  nacionalidad?: string;

  @Column({ nullable: true })
  naturalidad?: string;

  @Column({ nullable: true })
  profession?: string;

  @Column({ type: 'money', nullable: true })
  salary?: number;

  @Column({ type: 'varchar', nullable: true })
  zipCode?: string;
  @Column({ type: 'varchar', nullable: true })
  streetAddress?: string;
  @Column({ type: 'varchar', nullable: true })
  streetAddressNumber?: string;
  @Column({ type: 'varchar', nullable: true })
  streetAddressComplement?: string;
  @Column({ type: 'varchar', nullable: true })
  city?: string;
  @Column({ type: 'varchar', nullable: true })
  state?: string;
  @Column({ type: 'varchar', nullable: true })
  country?: string;

  @Column({ nullable: true })
  passportNumber?: string;
  @Column({ nullable: true })
  passportCreatedDate?: string;
  @Column({ nullable: true })
  passportExpiresDate?: string;

  @Column({ default: false, nullable: true })
  hasVisa?: boolean;
  @Column({ nullable: true })
  visaStartDate?: Date;
  @Column({ nullable: true })
  visaEndDate?: Date;
  @Column({ nullable: true })
  visaDaysPerm?: number;

  @Column({ nullable: true })
  anotherInformation: string;
  @Column({ nullable: true })
  resetPassword?: string;
  @Column({ nullable: true })
  lastLogin?: Date;

  @Column({ default: USER_STATUS.ACTIVE })
  status: USER_STATUS;

  @OneToMany(() => Company, (c) => c.user, {
    cascade: true, // Cria, Atualiza e Exclui Leads junto com User
    eager: true, // não carrega automaticamente
  })
  companies: Company[];

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

  @DeleteDateColumn({
    type: 'time with time zone',
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt?: Date;
}
