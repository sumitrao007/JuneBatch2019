import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { TestComponent } from './test.component';
import { EmpolyeeComponent } from './empolyee/empolyee.component';
import { UserComponent } from './test1/day1/User/user.component';
import { PropertyComponent } from './property.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TestComponent,
    EmpolyeeComponent,
    UserComponent,
    PropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
