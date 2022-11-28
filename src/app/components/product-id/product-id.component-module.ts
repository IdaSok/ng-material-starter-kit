import { NgModule } from '@angular/core';
import { ProductIdComponent } from './product-id.component';
import {AsyncPipe, CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

@NgModule({
    imports: [MatCardModule, CommonModule],
  declarations: [ProductIdComponent],
  providers: [],
  exports: [ProductIdComponent]
})
export class ProductIdComponentModule {
}
