import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import CreateUserDto from '../users/DTO/create-user.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post('/sign_in')
    signIn(@Body() dto: CreateUserDto) {
        return this.authService.signIn(dto);
    }

    @Post('/sign_up')
    signUp(@Body() dto: CreateUserDto) {
        return this.authService.signUp(dto);
    }
}
