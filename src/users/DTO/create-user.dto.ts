import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export default class CreateUserDto {

    @ApiProperty({ example: 'user@mail.com', description: 'User email' })
    @IsString({ message: 'Should be a string' })
    @IsEmail({}, { message: 'Incorrect email' })
    readonly email: string;
    @ApiProperty({ example: 'qwerty', description: 'User password' })
    @IsString( {message: 'Should be a string'})
    @Length(6, 20, { message: 'Should be in range 6...20 symbols'})
    readonly password: string;
}
