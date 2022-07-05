import { Injectable } from '@nestjs/common';
import CreateRoleDto from './DTO/create-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import Role from './roles.model';

@Injectable()
export class RolesService {

    constructor(@InjectModel(Role) private roleRepository: typeof Role) {
    }

    async createRole(dto: CreateRoleDto) {
        return await this.roleRepository.create(dto);
    }

    async getRoleByValue(role: string) {
        return await this.roleRepository.findOne({where: {role}});
    }
}
