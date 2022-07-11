import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from './users.model';
import CreateUserDto from './DTO/create-user.dto';
import { RolesService } from '../roles/roles.service';
import AddUserRoleDto from './DTO/add-role.dto';
import BanUserDto from './DTO/ban-user.dto';
import UnbanUserDto from './DTO/unban-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                private rolesService: RolesService) {
    }

    async create(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.rolesService.getRoleByValue('User');
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }

    async getUsers() {
        return await this.userRepository.findAll({ include: { all: true } });
    }

    async getUserByEmail(email: string) {
        return await this.userRepository.findOne({ where: { email }, include: { all: true } });
    }

    async assignRole(dto: AddUserRoleDto) {
        const user = await this.userRepository.findByPk(dto.userID);
        const role = await this.rolesService.getRoleByValue(dto.role);
        if (user && role) {
            await user.$add('role', role.id);
            return user;
        } else {
            throw new HttpException('User or role not found', HttpStatus.NOT_FOUND);
        }
    }

    async banUser(dto: BanUserDto) {
        const user = await this.userRepository.findByPk(dto.userID);
        if (user) {
            user.banned = true;
            user.banReason = dto.banReason;
            await user.save();
            return user;
        } else {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
    }

    async unbanUser(dto: UnbanUserDto) {
        const user = await this.userRepository.findByPk(dto.userID);
        if (user) {
            user.banned = false;
            user.banReason = null;
            await user.save();
            return user;
        } else {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
    }
}
