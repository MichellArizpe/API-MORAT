import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MoratModule } from './morat/morat.module';

@Module({
  imports: [CatsModule, MoratModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
