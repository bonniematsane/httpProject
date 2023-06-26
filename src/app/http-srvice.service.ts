import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpSrviceService {
  nameURL: string = 'https://api.agify.io?name=bonnie';

 
  constructor(private http: HttpClient) { }

  getNames():Observable<any>{
   return this.http.get(this.nameURL)
  }
}
