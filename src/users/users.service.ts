import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import User from './users.model';
import {CreateUserDto} from './DTO/create-user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User) {
    }

    public async create(dto: CreateUserDto) {
        return await this.userRepository.create(dto);
    }

    public async getUsers() {
        return await this.userRepository.findAll();
    }
}
