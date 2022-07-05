import { ApiProperty } from '@nestjs/swagger';

export default class CreateUserDto {

    @ApiProperty({example: 'user@mail.com', description: 'User email'})
    readonly email: string;
    @ApiProperty({ example: 'qwerty', description: 'User password'})
    readonly password: string;
}
