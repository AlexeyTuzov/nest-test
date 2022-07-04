import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './DTO/create-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import User from './users.model';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {

    }

    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    public createUser(@Body() dto: CreateUserDto) {
        return this.usersService.create(dto);
    }

    @ApiOperation({ summary: 'get all users'})
    @ApiResponse({ status: 200, type: [User]})
    @Get()
    public getUsers() {
        return this.usersService.getUsers();
    }
}
