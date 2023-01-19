import { Module } from '@nestjs/common';
import { ShowsService } from './shows.service';
import { ShowsController } from './shows.controller';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  controllers: [ShowsController],
  providers: [ShowsService],
  imports: [HttpModule]
})
export class ShowsModule {}
