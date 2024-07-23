import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
 baseUrl : string = 'https://reqres.in/';

  constructor(private httpClient:HttpClient) { }

  public listUsers():Observable<any>{
    return this.httpClient.get('https://reqres.in/api/users?page=2')
  }

  public createUser(data:any):Observable<any>{
    return this.httpClient.post('https://reqres.in/api/users',JSON.stringify(data))
  }
}
