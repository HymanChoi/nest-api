/*
 * @Author: your name
 * @Date: 2021-01-18 21:19:40
 * @LastEditTime: 2021-01-19 22:22:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /nest-api/src/modules/users/users.entity.ts
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;
}