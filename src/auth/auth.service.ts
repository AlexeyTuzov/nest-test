import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import CreateUserDto from '../users/DTO/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {
    }

    async signIn(dto: CreateUserDto) {
        const foundUser = await this.userService.getUserByEmail(dto.email);
        if (!foundUser) {
            throw new HttpException('User with this email is not registered yet!', HttpStatus.BAD_REQUEST);
        }
        const passwordCheck: boolean = await bcrypt.compare(dto.password, foundUser.password);
        if (!passwordCheck) {
            throw new HttpException('Password mismatch!', HttpStatus.BAD_REQUEST);
        }
        const payload = { email: foundUser.email, id: foundUser.id, roles: foundUser.roles }
        return {
            token: this.jwtService.sign(payload)
        };
    }

    async signUp(dto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(dto.email);
        if (candidate) {
            throw  new HttpException('User with this email already exists!', HttpStatus.BAD_REQUEST);
        }
        const hashedPassword = await bcrypt.hash(dto.password, 7);
        await this.userService.create({ ...dto, password: hashedPassword });
        return 'User successfully registered!';
    }
}
