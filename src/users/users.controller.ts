import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import CreateUserDto from './DTO/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import User from './users.model';
import JwtAuthGuard from '../auth/jwt-auth.guard'
import RolesGuard from '../auth/roles.guard';
import { Roles } from '../auth/roles-auth.decorator';
import AddUserRoleDto from './DTO/add-role.dto';
import BanUserDto from './DTO/ban-user.dto';
import UnbanUserDto from './DTO/unban-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {

    }

    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: 201, type: User })
    @Post()
    createUser(@Body() dto: CreateUserDto) {
        return this.usersService.create(dto);
    }

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, type: [User] })
    @Roles('Admin')
    @UseGuards(RolesGuard)
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @ApiOperation({ summary: 'Assign a role to User' })
    @ApiResponse({ status: 200, type: User })
    @Roles('Admin')
    @UseGuards(RolesGuard)
    @Patch('/add_role')
    assignRole(@Body() dto: AddUserRoleDto) {
        return this.usersService.assignRole(dto);
    }

    @ApiOperation({ summary: 'Ban User' })
    @ApiResponse({ status: 200, type: User })
    @Roles('Admin')
    @UseGuards(RolesGuard)
    @Patch('/ban_user')
    banUser(@Body() dto: BanUserDto) {
        return this.usersService.banUser(dto);
    }

    @ApiOperation({ summary: 'Unban User'})
    @ApiResponse({ status: 200, type: User})
    @Roles('Admin')
    @UseGuards(RolesGuard)
    @Patch('/unban_user')
    unbanUser(@Body() dto: UnbanUserDto) {
        return this.usersService.unbanUser(dto);
    }
}
