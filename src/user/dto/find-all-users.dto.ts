import { Injectable, Query } from "@nestjs/common"
import { ApiProperty, ApiQuery } from "@nestjs/swagger"

@Injectable()
export class FindAllUsersDto {
    @ApiProperty({name: 'skip', required: false, type: Number})
    skip?: number

    @ApiProperty({name: 'take', required: false, type: Number})
    take?: number

    @ApiProperty({name: 'search', required: false, type: String})
    search?: string
}