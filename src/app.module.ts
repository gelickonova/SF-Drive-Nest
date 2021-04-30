import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import {MulterModule} from "@nestjs/platform-express";
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';
import {UsersModule} from "./modules/users/users.module";


@Module({
    imports: [
        UsersModule,
        TypeOrmModule.forRoot({
            name: 'default',
            type: "mongodb",
            host: 'localhost',
            port: 3000,
            database: 'sf-drive',
            useNewUrlParser: true,
            useUnifiedTopology: true,
            entities: [
                `${__dirname}/**/*.entity.{ts,js}`
            ]
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'dist'),
        }),
        MulterModule.register({
            dest: '/files'
        })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
