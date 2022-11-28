import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {AgeModel} from "../../models/age.model";
import {AgeService} from "../../services/age.service";
import {ActivatedRoute} from "@angular/router";
import {ProductModel} from "../../models/product.model";
import {ProductidService} from "../../services/productid.service";

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductIdComponent {
  readonly productid$: Observable<ProductModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._productidService.getOne(data['id'])))


  constructor(private _productidService: ProductidService, private _activatedRoute: ActivatedRoute) {
  }
}
