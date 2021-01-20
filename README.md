<!--
 * @Author: Hyman Choi
 * @Date: 2021-01-18 12:25:40
 * @LastEditTime: 2021-01-20 10:03:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-api\README.md
-->
# Nest API


### 项目介绍
一个基于Nest的后端接口项目

### 相关知识
1. Nest.js
2. Typescript
3. Typeorm
4. MySQL
5. Swagger
6. JWT

### 项目结构

```
|-- nest-api
    |-- .eslintrc.js
    |-- .gitignore
    |-- .prettierrc
    |-- LICENSE
    |-- nest-cli.json
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- tsconfig.build.json
    |-- tsconfig.json
    |-- src
    |   |-- app.module.ts (模块配置文件)
    |   |-- main.ts (入口文件)
    |   |-- common (通用模块，包含自定义装饰器、过滤器、守卫、拦截器、中间件)
    |   |   |-- interceptors (拦截器)
    |   |-- config (配置文件信息)
    |   |   |-- database.ts
    |   |-- modules (业务代码)
    |   |   |-- auth
    |   |   |   |-- auth.module.ts
    |   |   |   |-- auth.service.spec.ts
    |   |   |   |-- auth.service.ts
    |   |   |   |-- constants.ts
    |   |   |   |-- jwt.strategy.ts
    |   |   |-- users
    |   |       |-- users.controller.spec.ts
    |   |       |-- users.controller.ts (Controller层)
    |   |       |-- users.entity.ts (映射数据库模型对象)
    |   |       |-- users.module.ts (模块定义)
    |   |       |-- users.service.spec.ts
    |   |       |-- users.service.ts (Service层)
    |   |       |-- dto (数据传输对象定义)
    |   |           |-- users.create.dto.ts
    |   |           |-- users.login.dto.ts
    |   |           |-- users.register.dto.ts
    |   |           |-- users.update.dto.ts
    |   |-- utils (常用工具类)
    |       |-- cryptogram.ts
    |-- test (单元测试)
        |-- app.e2e-spec.ts
        |-- jest-e2e.json
```

### 安装依赖

```
$ npm install
```

### 运行项目

```
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### 单元测试

```
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
