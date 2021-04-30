import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ArgumentsHost, Catch, ExceptionFilter, HttpException, NotFoundException} from "@nestjs/common";
import path from "path";

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.sendFile(path.join(__dirname, '../dist/index.html'));
}
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(3000);

  app.useGlobalFilters(new NotFoundExceptionFilter());
}
bootstrap();
