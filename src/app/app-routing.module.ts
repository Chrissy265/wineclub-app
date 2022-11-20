import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusPageComponent } from './contactus-page/contactus-page.component'; 
 

const routes: Routes = [
  

  {path:'Contact Us', component:ContactusPageComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
