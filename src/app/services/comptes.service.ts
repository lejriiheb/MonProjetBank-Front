import { Injectable } from '@angular/core';
import { Compte } from '../domain/compte';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  private URL = 'http://localhost:1461/api/Comptes';

  constructor(private _http: HttpClient) { }

  getAllComptes(): Observable<Compte[]> {
    return this._http.get<Compte[]>(this.URL) ;
  }
}
