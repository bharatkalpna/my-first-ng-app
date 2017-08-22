import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {formsModule} from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
