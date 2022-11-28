import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CatsModel } from '../../models/cats.model';
import { CatsService } from '../../services/cats.service';


@Component({
  selector: 'app-cats',
  styleUrls: ['./cats.component.scss'],
  templateUrl: './cats.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatsComponent {
  readonly catfacts$: Observable<CatsModel> = this._catsService.getOne();

  constructor(private _catsService: CatsService) {
  }
}
