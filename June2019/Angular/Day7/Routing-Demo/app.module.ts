import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { MultiparameterComponent } from './multiparameter/multiparameter.component';
import { QueryparameterComponent } from './queryparameter/queryparameter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    FollowerComponent,
    MyfollowerComponent,
    NotfoundComponent,
    MultiparameterComponent,
    QueryparameterComponent
  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'contactus',
        component:ContactusComponent
      },
      {
        path:'aboutus',
        component:AboutusComponent
      },
      {
        path:'follower',
        component:FollowerComponent
      },
      {
        path:'myfollower/:username',
        component:MyfollowerComponent
      },
      {
        path:'mutiparameter/:id/:username',
        component:MultiparameterComponent
      },
      {
        path:'queryparameter',
        component:QueryparameterComponent
      },
      {
        path:'**',
        component:NotfoundComponent
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
