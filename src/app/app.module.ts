import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { AjrModelComponent } from './ajr-model/ajr-model.component';
import { AjrModelChild1Component } from './ajr-model-child1/ajr-model-child1.component';

@NgModule({
  declarations: [
    AppComponent,
    AjrModelComponent,
    AjrModelChild1Component
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
