import { Injectable, Module, Scope } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { COFFEE_BRANDS } from './coffee.constants';
import { Connection } from 'typeorm';

class ConfigService {}
class DevelopmentConfigService {}
class ProductionConfigService {}

@Injectable()
    export class coffeeBrandsFactory {
        create() {
            // do some thing ...
            return ['buddy brew', 'nescafe']
        }
    }

@Module({
    imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
    controllers: [CoffeesController],
    providers: [
        CoffeesService,
        // {
        //     provide: COFFEE_BRANDS,
        //     // useValue: ['buddy brew', 'nescafe']
        //     useFactory: (brandsFactory: coffeeBrandsFactory) =>
        //         brandsFactory.create(),
        //     inject: [coffeeBrandsFactory]
        // },
        {
            provide: 'COFFEE_BRANDS',
            useFactory: () => ['buddy brew', 'nescafe'],
            scope: Scope.TRANSIENT
          }
        // {
        //     provide: COFFEE_BRANDS,
        //         useFactory: async (connection: Connection): Promise<string[]> => {
        //             const coffeeBrands = await Promise.resolve([
        //                 'buddy brew', 'nescafe'
        //             ])
        //             console.log("ASYNC FUNC")
        //             return coffeeBrands
        //         },
        //     inject: [Connection]
        // },
        // {
        //     provide: ConfigService,
        //     useClass: process.env.NODE_ENV === "development"
        //         ? DevelopmentConfigService
        //         : ProductionConfigService
        // }
    ],
    // providers: [{
    //     provide: CoffeesService,
    //     useValue: new MockCoffeesService()
    // }],
    // providers: [
    //     {
    //         provide: CoffeesService,
    //         useClass: CoffeesService
    //     }
    // ],
    exports: [CoffeesService]
})
export class CoffeesModule {

}
