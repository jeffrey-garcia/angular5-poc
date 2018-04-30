import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
    MatButtonModule, 
    MatCheckboxModule
} 
from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, 
        MatCheckboxModule
    ],
    exports: [
        MatButtonModule, 
        MatCheckboxModule]
  })
export class CoreMaterialModule { }
