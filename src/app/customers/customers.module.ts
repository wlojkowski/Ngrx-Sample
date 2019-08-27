import { CustomerEffect } from './state/customer.effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EffectsModule, Actions } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { Routes, RouterModule } from '@angular/router';
import { customerReducer } from './state/customer.reducer';
const customerRoutes: Routes = [{ path: '', component: CustomerComponent }];

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerListComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(customerRoutes),
    StoreModule.forFeature('customers', customerReducer),
    EffectsModule.forFeature([CustomerEffect])
  ]
})
export class CustomersModule { }
