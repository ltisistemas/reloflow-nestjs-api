import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { COMPANY_STATUS } from './company-status.enum';
import { Lead } from './lead.modal';
import { User } from '../user/user';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  tax_number: string;

  @Column({ default: COMPANY_STATUS.ACTIVE })
  status: COMPANY_STATUS;

  @OneToMany(() => Lead, (lead) => lead.company, {
    cascade: true, // Cria, Atualiza e Exclui Leads junto com Company
    eager: true, // não carrega automaticamente
  })
  leads: Lead[];

  @ManyToOne(() => User, (u) => u.companies, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

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
