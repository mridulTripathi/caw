import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MovieModule } from './movie/movie.module';
import { DatabaseModule } from './database/database.module';
import { Database } from './database';

@Module({
  imports: [AuthModule, UsersModule, MovieModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, Database],
})
export class AppModule {}
