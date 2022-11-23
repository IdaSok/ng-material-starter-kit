import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {ProductsService} from "../../services/products.service";
import {ProductSearchService} from "../../services/product-search.service";

@Component({
  selector: 'app-product-search',
  styleUrls: ['./product-search.component.scss'],
  templateUrl: './product-search.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSearchComponent {
  readonly list$: Observable<ProductModel[]> = this._ProductSearchService.getAll();

  constructor(private _ProductSearchService : ProductSearchService) {
  }
}
