import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatCardModule, MatListModule],
  declarations: [RegisterComponent],
  providers: [],
  exports: [RegisterComponent]
})
export class RegisterComponentModule {
}
