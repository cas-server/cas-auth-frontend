import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { ElementLoginPanelComponent } from './element-login-panel/element-login-panel.component';
import { PageRegistrationComponent } from './page-registration/page-registration.component';
import { ElementRegistrationPanelComponent } from './element-registration-panel/element-registration-panel.component';
import { PageMainMenuComponent } from './page-main-menu/page-main-menu.component';
import { ElementBodyComponent } from './element-body/element-body.component';
import { ElementCanvasComponent } from './element-canvas/element-canvas.component';
import { ElementHeaderComponent } from './element-header/element-header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    ElementLoginPanelComponent,
    PageRegistrationComponent,
    ElementRegistrationPanelComponent,
    PageMainMenuComponent,
    ElementBodyComponent,
    ElementCanvasComponent,
    ElementHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
