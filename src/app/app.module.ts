import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PopupDialogComponent,
  ],
  entryComponents:[
    PopupDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule 
  ],
  exports: [
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
