import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CapcodataService } from './capcodata.service';
import { PaginationService } from './pagination.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CapcodataService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
