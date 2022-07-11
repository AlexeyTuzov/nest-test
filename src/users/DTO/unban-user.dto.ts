import { ApiProperty } from '@nestjs/swagger';

export default class UnbanUserDto {

    @ApiProperty({ example: 7, description: 'ID of User to be unbanned'})
    readonly userID: number;
}
