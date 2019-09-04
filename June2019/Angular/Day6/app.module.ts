import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostapiComponent } from './postapi/postapi.component';
import { HttpModule } from '@angular/http';
import { PostapiserviceComponent } from './postapiservice/postapiservice.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostapiComponent,
    PostapiserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
