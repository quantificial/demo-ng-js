import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowExpressionComponent } from './show-expression/show-expression.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowExpressionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
