import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "../models/product.model";
import {Observable} from "rxjs";
import {RegisterModel} from "../models/register.model";

@Injectable()
export class RegisterService {

  constructor(private _httpClient: HttpClient) {
  }
  create(register: RegisterModel): Observable<RegisterModel> {
    return this._httpClient.post<RegisterModel>('https://fakestoreapi.com/users', register);
  }
}
