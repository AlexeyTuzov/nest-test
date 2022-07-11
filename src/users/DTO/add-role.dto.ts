import { ApiProperty } from '@nestjs/swagger';

export default class AddUserRoleDto {

    @ApiProperty({ example: 'Moderator', description: 'Role name' })
    readonly role: string;
    @ApiProperty({ example: '1', description: 'ID of User to be assigned to a role'})
    readonly userID: number;
}
