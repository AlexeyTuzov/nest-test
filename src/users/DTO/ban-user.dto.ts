import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export default class BanUserDto {

    @ApiProperty({ example: 'Floods', description: 'User ban reason' })
    @IsString({ message: 'Should be a string' })
    readonly banReason: string;
    @ApiProperty({ example: '13', description: 'ID of User to be banned' })
    @IsNumber({}, { message: 'Should be a number of User ID' })
    readonly userID: number;
}
