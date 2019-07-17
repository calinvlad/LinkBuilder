import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildlinkComponent } from './components/buildlink/buildlink.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ReadlinkComponent } from './components/readlink/readlink.component';
import { OpsComponent } from './components/ops/ops.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildlinkComponent,
    ReadlinkComponent,
    OpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
