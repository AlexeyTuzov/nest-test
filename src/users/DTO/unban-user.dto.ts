import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export default class UnbanUserDto {

    @ApiProperty({ example: 7, description: 'ID of User to be unbanned'})
    @IsNumber({}, { message: 'Should be a number of User ID' })
    readonly userID: number;
}
