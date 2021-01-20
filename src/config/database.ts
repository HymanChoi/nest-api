/*
 * @Author: Hyman Choi
 * @Date: 2021-01-18 14:24:29
 * @LastEditTime: 2021-01-20 09:39:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-api\src\config\database.ts
 */
const productConfig = {
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'test',
  },
};

const testingConfig = {
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'test',
  },
};

const config = process.env.NODE_ENV ? productConfig : testingConfig;

export default config;
