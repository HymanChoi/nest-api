/*
 * @Author: Hyman Choi
 * @Date: 2021-01-18 14:20:55
 * @LastEditTime: 2021-01-19 15:40:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-api\src\modules\users\users.entity.ts
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
