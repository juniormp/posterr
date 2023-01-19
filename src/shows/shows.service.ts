import { HttpService } from '@nestjs/axios';
import { HttpServer, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class ShowsService {

    constructor(private readonly httpService: HttpService) {}

    getShow(show: string): Promise<AxiosResponse<any>> {
        const response = this.httpService.axiosRef.get('http://api.tvmaze.com/search/shows?q=' + show)

        console.log(response)

        return response
    }
}
 