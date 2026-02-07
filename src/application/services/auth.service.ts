import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from 'src/infra/repository/user-repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private repository: UserRepository,
    private jwtService: JwtService,
  ) {}

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

    const { id: sub, firstName, lastName, lastLogin } = user;

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
