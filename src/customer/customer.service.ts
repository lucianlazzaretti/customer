import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {

    customer: Array<Customer> = [];

    constructor() {

        let customer = new Customer();
        customer.name = 'Lucian Piran Lazzaretti';
        customer.phone = 999162915;
        customer.email = 'lucian.lazzaretti@edu.unipar.br';
        customer.address = 'Rua Olivo beal';
        customer.cep = 85901190;
        customer.rg = 1106440025;
        customer.cpf = 2242077090;
        customer.birth= new Date(1991,7,16);
        customer.naturalness = 'Brasileiro';
        customer.profession = 'Implantador de sistemas';

        this.customer.push(customer);
    }

    findAll() {
        return this.customer;
    }

    save(customer: Customer) {
        this.customer.push(customer);
    }

}
