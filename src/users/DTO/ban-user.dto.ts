import { ApiProperty } from '@nestjs/swagger';

export default class BanUserDto {

    @ApiProperty({ example: 'Floods', description: 'User ban reason'})
    readonly banReason: string;
    @ApiProperty({ example: '13', description: 'ID of User to be banned'})
    readonly userID: number;
}
