import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './product/entities/product.entity';
import { ProductModule } from './product/product.module';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { UploadFileModule } from './upload-file/upload-file.module';

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
    //   entities: [User, Product],
    //   synchronize: true,
    //   logging: true
    // }), 
    UserModule,
    ProductModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-cgdb65l269v52g64absg-a.singapore-postgres.render.com',
      username: 'sbgn',
      password: 'DGjBSztpO3zDq46UVUmY0yNhSsPfkpiM',
      database: 'epasal',
      entities: [User, Product],
      synchronize: true,
      logging: true,
      ssl: true
    }),

    UploadFileModule
    ,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
