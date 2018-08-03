import { Injectable } from '@angular/core';
import { Compte } from '../domain/compte';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  constructor(private _http: HttpClient) { }

  getAllComptes():Compte[] {
    return null;
    // return [
    //   {'numero': 'SS-Fake001', 'proprietaire': 'FakeProp1', 'solde': 11111},
    //   {'numero': 'Fake002', 'proprietaire': 'FakeProp2', 'solde': 11111},
    //   {'numero': 'Fake003', 'proprietaire': 'FakeProp3', 'solde': 11111},
    // ];
  }
}
