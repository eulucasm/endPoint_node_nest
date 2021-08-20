import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {

    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: '123456',
    database: 'nestjs',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
}