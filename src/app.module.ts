import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // ConfigModule.forRoot(),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: '0000',
    //   database: 'epasal',
    //   entities: [User],
    //   synchronize: true,
    //   logging: true
    // }), UserModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cgdb65l269v52g64absg-a.singapore-postgres.render.com',
      username: 'sbgn',
      password: 'DGjBSztpO3zDq46UVUmY0yNhSsPfkpiM',
      database: 'epasal',
      entities: [User],
      synchronize: true,
      logging: true,
      ssl: true
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
