import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export default class CreateRoleDto {

    @ApiProperty({example: 'Admin', description: 'User role'})
    @IsString({ message: 'Should be a string'})
    readonly role: string;
    @ApiProperty({ example: 'Person who can do everything', description: 'Role description'})
    @IsString({ message: 'Should be a string'})
    readonly description: string;
}
