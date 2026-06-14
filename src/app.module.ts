import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MoratModule } from './morat/morat.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, MoratModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
