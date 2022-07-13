import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import User from '../users/users.model';

interface IPostsCreationArgs {
    title: string;
    content: string;
    userID: number;
    image: string;
}

@Table({ tableName: 'posts' })
export default class Post extends Model<Post, IPostsCreationArgs> {

    @ApiProperty({ example: 7, description: 'Post ID' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'Title', description: 'Post title' })
    @Column({ type: DataType.STRING, allowNull: false })
    title: string;

    @ApiProperty({ example: 'Lorem ipsum dolor sit amet', description: 'Post text content' })
    @Column({ type: DataType.STRING, allowNull: false })
    content: string;

    @ApiProperty({ example: 'filename.jpg', description: 'Name of image file' })
    @Column({ type: DataType.STRING })
    image: string;

    @ApiProperty({ example: 'Alex', description: 'Post author' })
    @BelongsTo(() => User)
    author: User;

    @ApiProperty({ example: 1, description: 'Author ID' })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;
}
