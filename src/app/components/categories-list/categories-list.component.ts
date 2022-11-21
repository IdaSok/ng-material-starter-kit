import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CheckboxCategoriesService } from '../../services/checkbox-categories.service';

@Component({
  selector: 'app-categories-list',
  styleUrls: ['./categories-list.component.scss'],
  templateUrl: './categories-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent {
  readonly list$: Observable<ProductModel[]> = this._checkboxCategoriesService.getAll();

  constructor(private _checkboxCategoriesService: CheckboxCategoriesService) {
  }
}
