import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { JobsBoardModule } from './jobs-board/jobs-board.module';
import { JobPageModule } from './job-page/job-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JobsBoardModule,
    JobPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
