import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import User from '../users/users.model';
import UserRoles from './user-roles.model';

interface IRoles {
    role: string;
    description: string;
}

@Table({ tableName: 'roles' })
export default class Role extends Model<Role, IRoles> {

    @ApiProperty({ example: '1', description: 'Unique ID' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Admin', description: 'User role' })
    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    role: string;

    @ApiProperty({ example: 'Person, who can do everything', description: 'Description of a role' })
    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
