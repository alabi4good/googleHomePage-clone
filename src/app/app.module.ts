import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickOutsideModule } from 'ng-click-outside';
import { TooltipModule } from 'ng2-tooltip-directive';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { GoogleAppsComponent } from './google-apps/google-apps.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleAppsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ClickOutsideModule,
    TooltipModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
