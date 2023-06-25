import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpSrviceService {
names: string = "boni,kwazy,vuyi,kat,nceba,thembeka,tshepo";
 
  constructor(private http: HttpClient) { }

  getNames():Observable<any>{
   return this.http.get(this.names)
  }
}
