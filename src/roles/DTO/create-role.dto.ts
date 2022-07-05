import { ApiProperty } from '@nestjs/swagger';

export default class CreateRoleDto {

    @ApiProperty({example: 'Admin', description: 'User role'})
    readonly role: string;
    @ApiProperty({ example: 'Person who can do everything', description: 'Role description'})
    readonly description: string;
}
