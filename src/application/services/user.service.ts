import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'src/domain/entities/user/user-create.dto';
import { UserRepository } from 'src/infra/repository/user-repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  create(dto: UserCreateDto) {
    const salt = bcrypt.genSaltSync(10);
    const password = bcrypt.hashSync(dto.password, salt);
    return this.repository.create({ ...dto, password });
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  findByEmail(email: string) {
    return this.repository.findByEmail(email);
  }
}
