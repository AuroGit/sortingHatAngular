import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private API_Url = 'https://hp-api.onrender.com/api/characters/house/';

  constructor(private readonly http:HttpClient) { }

  getData(house:string):Observable<any> {
    const data = this.http.get<any>(this.API_Url + house);
    return data;
  }
}
