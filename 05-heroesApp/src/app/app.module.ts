import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './shared/error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ErrorPageComponent
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
