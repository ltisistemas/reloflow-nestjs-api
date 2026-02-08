import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from 'src/infra/repository/user-repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
import { UserCreateDto } from 'src/domain/entities/user/user-create.dto';
import { User } from 'src/domain/entities/user/user';

@Injectable()
export class AuthService {
  constructor(
    private repository: UserRepository,
    private service: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(dto: UserCreateDto) {
    const user = await this.service.create(dto);

    return this.token(user);
  }

  async signIn(email: string, password: string) {
    const user = await this.repository.findByEmail(email);
    if (!user) {
      throw new NotFoundException(
        'Usuário não encontrado',
        'E-mail fornecido não encontra-se na base de dados.',
      );
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException('Usuário ou Senha invalidos');
    }

    return this.token(user);
  }

  private async token(user: User) {
    const { id: sub, email, firstName, lastName, lastLogin } = user;

    const name = ''.concat(firstName, ' ', lastName);

    const payload = {
      sub,
      username: email,
      name,
    };

    const access_token = await this.jwtService.signAsync(payload);

    return { sub, email, name, lastLogin, access_token };
  }
}
