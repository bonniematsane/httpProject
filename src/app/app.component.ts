import { Component, OnInit } from '@angular/core';
import { HttpSrviceService } from './http-srvice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  
 export class AppComponent implements OnInit{
  

  constructor(private httpService: HttpSrviceService ) { }

  ngOnInit(): void {
      
  }
  getNamesFromService(){
    this.httpService.getNames().subscribe((naam:any) =>{
      console.log(naam);
    });
  }
}