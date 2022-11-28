import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AgeModel } from '../../models/age.model';
import { AgeService } from '../../services/age.service';
import {switchMap} from "rxjs";

@Component({
  selector: 'app-age',
  styleUrls: ['./age.component.scss'],
  templateUrl: './age.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgeComponent {

  readonly age$: Observable<AgeModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._ageService.getOne(data['name'])))


  constructor(private _ageService: AgeService, private _activatedRoute: ActivatedRoute) {
  }
}
