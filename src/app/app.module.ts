import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { ElementLoginPanelComponent } from './element-login-panel/element-login-panel.component';
import { PageRegistrationComponent } from './page-registration/page-registration.component';
import { ElementRegistrationPanelComponent } from './element-registration-panel/element-registration-panel.component';
import { PageMainMenuComponent } from './page-main-menu/page-main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./service/AuthInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    ElementLoginPanelComponent,
    PageRegistrationComponent,
    ElementRegistrationPanelComponent,
    PageMainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
