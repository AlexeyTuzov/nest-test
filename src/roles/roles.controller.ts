import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { RolesService } from './roles.service';
import CreateRoleDto from './DTO/create-role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import ValidationPipe from '../pipes/validation.pipe';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {

    constructor(private rolesService: RolesService) {
    }

    @ApiOperation({ summary: 'Create User Role'})
    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() dto: CreateRoleDto) {
        return this.rolesService.createRole(dto);
    }

    @ApiOperation({ summary: 'Get User role'})
    @Get('/:value')
    getByValue(@Param('value') value: string) {
        return this.rolesService.getRoleByValue(value);
    }
}
