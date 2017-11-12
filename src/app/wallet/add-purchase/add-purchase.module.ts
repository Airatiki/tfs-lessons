import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddPurchaseComponent} from './add-purchase.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddPurchaseComponent],
  exports: [AddPurchaseComponent]
})
export class AddPurchaseModule {
}
