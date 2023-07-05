import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public endpoint = environment.endpoint;

  constructor(private _http: HttpClient) {}

  send(data: any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(`${this.endpoint}`, data, {
      headers: headers,
    });
  }
}
