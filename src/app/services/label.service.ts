import { IShippingLabel } from './../models/shipping.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private http: HttpClient) { }

  create(labelInfo?: IShippingLabel) {
    // example API call
    // return this.http.post<any>(`${environment.server_url}/label/create`, { labelInfo });
  }
}
