import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreMaterialModule } from '../core/core_material.module';

import { IonicApp, IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    CoreMaterialModule,
    IonicModule.forRoot(AppComponent)
  ],
  providers: [],
  bootstrap: [ IonicApp ]
})
export class AppModule { }
