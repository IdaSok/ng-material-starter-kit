import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateEmployeeService } from '../../services/create-employee.service';

@Component({
  selector: 'app-create-employee',
  styleUrls: ['./create-employee.component.scss'],
  templateUrl: './create-employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateEmployeeComponent {
  readonly createEmployee: FormGroup = new FormGroup({
    name: new FormControl(),
    salary: new FormControl(),
    age: new FormControl(),
  });

  constructor(private _createEmployeeService: CreateEmployeeService) {
  }

  onCreateEmployeeSubmitted(createEmployee: FormGroup): void {
    this._createEmployeeService.create({
      name: createEmployee.get('name')?.value,
      salary: createEmployee.get('salary')?.value,
      age: createEmployee.get('age')?.value,
    }).subscribe();
  }
}
