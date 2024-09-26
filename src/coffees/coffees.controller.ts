import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

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
        @Param('id') id: number
    ) {
        console.log(typeof id)
        return this.coffeesService.findOne(""+id)
    }

    @Post()
    public create(
        // 'name' for specific return key
        // @Body('name') body
        @Body() createCoffeeDto: CreateCoffeeDto
    ) {
        console.log(createCoffeeDto instanceof CreateCoffeeDto)
        return this.coffeesService.create(createCoffeeDto);
    }

    @Patch(':id')
    public update(
        @Param('id') id: string,
        @Body() updateCoffeeDto: UpdateCoffeeDto
    ) {
        return this.coffeesService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    public remove(
        @Param('id') id: string
    ) {
        return this.coffeesService.remove(id);
    }


}
