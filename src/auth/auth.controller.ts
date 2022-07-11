import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import CreateUserDto from '../users/DTO/create-user.dto';
import User from '../users/users.model';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }
    @ApiOperation({ summary: 'User Sign In'})
    @ApiResponse({status: 201})
    @Post('/sign_in')
    signIn(@Body() dto: CreateUserDto) {
        return this.authService.signIn(dto);
    }

    @ApiOperation({ summary: 'User Sign Up'})
    @ApiResponse({status: 201})
    @Post('/sign_up')
    signUp(@Body() dto: CreateUserDto) {
        return this.authService.signUp(dto);
    }
}
