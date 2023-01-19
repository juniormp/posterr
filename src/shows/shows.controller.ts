import { Controller, Get, Param } from '@nestjs/common';
import { IsPublic } from 'src/auth/decorator/is-public.decorator';
import { ShowsService } from './shows.service';

@Controller('shows')
export class ShowsController {
  constructor(private readonly showsService: ShowsService) {}


  @Get(':show')
  @IsPublic()
  async shows(@Param('show') show: string) {
    return this.showsService.getShow(show)
  }
}
