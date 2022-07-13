import { ApiProperty } from '@nestjs/swagger';

export default class CreatePostDto {

    @ApiProperty({ example: 'Title', description: 'Post title' })
    readonly title: string;
    @ApiProperty({ example: 'Lorem ipsum dolor sit amet', description: 'Post text content' })
    readonly content: string;
    @ApiProperty({ example: 1, description: 'Author ID' })
    readonly userID: number;
}
