import { ApiProperty } from '@nestjs/swagger';
import { User } from './user';
import { USER_GENDER } from './user-gender-enum';

export class UserCreateDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty({ example: 'MEN, WOAMAN, OTHERs' })
  gender: USER_GENDER;

  @ApiProperty({
    example: 'CPF do Brasil ou NIF Portugues por exemplo, sem pontos ou traços',
  })
  tax_number: string;
}
