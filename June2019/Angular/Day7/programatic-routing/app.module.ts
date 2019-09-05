import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FollowerComponent } from './follower/follower.component';
import { RouterModule } from '@angular/router';
import { ParameterbuttonComponent } from './parameterbutton/parameterbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    FollowerComponent,
    ParameterbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // RouterModule.forRoot([
    //   {path:'',component:HomeComponent},
    //   {path:'aboutus',component:AboutusComponent},
    //   {path:'contactus',component:ContactusComponent},
    //   {path:'follower',component:FollowerComponent},
    //   {path:'parameterbtn/:id/:username',component:ParameterbuttonComponent}
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
