import { Component, OnInit } from '@angular/core';
import { HttpSrviceService } from './http-srvice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  
 export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  

  constructor(private httpService: HttpSrviceService ) { }
name: any;
  ngOnInit(): void {
      
  }
  getNamesFromService(){
    this.httpService.getNames().subscribe((naam:any) =>{
      this.name=naam.name;
      console.log(naam.name);
    });
  }
}