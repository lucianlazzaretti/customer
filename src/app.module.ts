import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';

@Module({
  imports: [ CustomerModule],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class AppModule {}
