import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export default class AddUserRoleDto {

    @ApiProperty({ example: 'Moderator', description: 'Role name' })
    @IsString({ message: 'Should be a string' })
    readonly role: string;
    @ApiProperty({ example: '1', description: 'ID of User to be assigned to a role' })
    @IsNumber({}, { message: 'Should be a number of User ID' })
    readonly userID: number;
}
