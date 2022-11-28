import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CatsComponent } from './cats.component';


@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [CatsComponent],
  providers: [],
  exports: [CatsComponent]
})
export class CatsComponentModule {
}
