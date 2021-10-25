import { Component, OnInit } from '@angular/core';

import { Customer } from '../core/model/customer';
import { Observable } from 'rxjs';
import { CustomersService } from './customers.service';


@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
    title = 'Customers';

    public customers$: Observable<Customer[]>;
    constructor(private readonly customersService: CustomersService) {}

    ngOnInit() {
        this.getCustomers();
    }

    private getCustomers(): void {
        this.customers$ = this.customersService.getAll();
    }

}
