    
    import { Module } from '@nestjs/common';
    import { MoratController } from './morat.controller';
    import { MoratService } from './morat.service';

    @Module({
      controllers: [MoratController],
      providers: [MoratService],
    })
    export class MoratModule {}
    