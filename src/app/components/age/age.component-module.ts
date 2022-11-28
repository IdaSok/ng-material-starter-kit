import { NgModule } from '@angular/core';
import { AgeComponent } from './age.component';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

@NgModule({
    imports: [MatCardModule, CommonModule],
  declarations: [AgeComponent],
  providers: [],
  exports: [AgeComponent]
})
export class AgeComponentModule {
}
