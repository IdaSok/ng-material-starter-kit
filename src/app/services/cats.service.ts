import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CatsModel } from '../models/cats.model';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CatsService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(): Observable<CatsModel> {
    return this._httpClient.get<CatsModel>('https://catfact.ninja/fact')
  }
}
