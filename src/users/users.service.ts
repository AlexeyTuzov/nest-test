import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from './users.model';
import CreateUserDto from './DTO/create-user.dto';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User,
                private rolesService: RolesService) {
    }

    public async create(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.rolesService.getRoleByValue('User');
        await user.$set('roles', [role.id]);
        return user;
    }

    public async getUsers() {
        return await this.userRepository.findAll({include: {all: true}});
    }
}
