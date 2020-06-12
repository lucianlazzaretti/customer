import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerDto } from './customer.dto';
import { Customer } from './customer.entity';
import { plainToClass } from "class-transformer";

@Controller('customers')
export class CustomerController {

    
    constructor(private readonly service: CustomerService) {
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Post()
    save(@Body() customerDto: CustomerDto) {
        const customer = plainToClass(Customer, customerDto);
        return this.service.save(customer);
    }

}
