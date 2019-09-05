import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FollowerComponent } from './follower/follower.component';
import { ParameterbuttonComponent } from './parameterbutton/parameterbutton.component';

const routes: Routes = [{path:'',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'follower',component:FollowerComponent},
  {path:'parameterbtn/:id/:username',component:ParameterbuttonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
