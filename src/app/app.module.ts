import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms"
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormComponent } from './Directives/form.component';
import { ComponentOne } from './InputOutput/componentone.component';
import { ApiComponent } from './Api_Integration/api.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    FormComponent,
    ComponentOne,
    ApiComponent,
    // HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
