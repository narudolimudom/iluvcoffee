import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) {}

    @Get()
    // public findAll(@Res() response) {
        public findAll(
            // @Query() paginationQuery
        ) {
        // response.status(200).send('This action returns all coffeesss')
        // const { limit, offset } = paginationQuery
        // return `This action returns all coffees. Limit ${limit}, offset: ${offset}`;
        return this.coffeesService.findAll()
    }

    @Get(':id')
    // specific return status
    // @HttpCode(HttpStatus.GONE)
    public findOne(
        @Param('id') id: string
    ) {
        return this.coffeesService.findOne(id)
    }

    @Post()
    public create(
        // 'name' for specific return key
        @Body('name') body
    ) {
        return this.coffeesService.create(body);
    }

    @Patch(':id')
    public update(
        @Param('id') id: string, @Body() body
    ) {
        return this.coffeesService.update(id, body);
    }

    @Delete(':id')
    public remove(
        @Param('id') id: string
    ) {
        return this.coffeesService.remove(id);
    }


}
