import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MovieModule } from './movie/movie.module';
import { DatabaseModule } from './database/database.module';
import { Database } from './database';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule, UsersModule, MovieModule, DatabaseModule, MongooseModule.forRoot('mongodb+srv://mridul:qweasdrf@caw-cluster.gjylq.mongodb.net/caw-db?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService, Database],
})
export class AppModule {}
