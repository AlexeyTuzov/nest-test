import { Column, Model, Table, DataType, BelongsToMany, HasMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import Role from '../roles/roles.model';
import UserRoles from '../roles/user-roles.model';
import Post from '../posts/posts.model';

interface IUserCreationArgs {
    email: string;
    password: string;
}

@Table({ tableName: 'users' })
export default class User extends Model<User, IUserCreationArgs> {

    @ApiProperty({ example: '1', description: 'Unique ID' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'user@mail.com', description: 'User email (should be unique)' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: 'qwerty', description: 'User password' })
    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    password: string;

    @ApiProperty({ example: false, description: 'return true if user has been banned' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: 'Banned forever for \'Z\' symbolic', description: 'Reason of user ban' })
    @Column({ type: DataType.STRING, unique: false, allowNull: true })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Post)
    posts: Post[];
}
