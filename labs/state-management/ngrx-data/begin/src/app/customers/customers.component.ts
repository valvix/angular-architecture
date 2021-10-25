import { Component, OnInit } from '@angular/core';

import { Customer } from '../core/model/customer';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CustomersService } from './customers.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
    title = 'Customers';

    public customers$: Observable<Customer[]>;
    public loading$: Observable<boolean>;

    constructor(private readonly customerService: CustomersService) {
        this.loading$ = this.customerService.loading$;
    }

    ngOnInit() {
        this.getCustomers();
    }

    private getCustomers(): void {
        this.customers$ = this.customerService.getAll();
    }

}
