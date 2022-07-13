import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import CreatePostDto from './DTO/create-post.dto';
import { PostsService } from './posts.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {

    constructor(private postsService: PostsService) {
    }

    @Post('/create')
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto,
               @UploadedFile() image) {
        return this.postsService.createPost(dto, image);
    }
}
