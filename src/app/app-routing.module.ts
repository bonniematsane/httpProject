import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpComponent } from './http/http.component';

const routes: Routes = [
  {
    path:"",pathMatch:'full', component:HttpComponent
  },
  {
    path:"http",component:HttpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
