/*
 * @Author: Hyman Choi
 * @Date: 2021-01-18 12:25:40
 * @LastEditTime: 2021-01-20 09:39:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nest-api\src\main.ts
 */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 设置全局路由前缀
  app.setGlobalPrefix('nest-api');

  const options = new DocumentBuilder()
    .addBasicAuth()
    .setTitle('Nest-API')
    .setDescription('This is a nest project.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document);

  await app.listen(3000);
}
bootstrap();
