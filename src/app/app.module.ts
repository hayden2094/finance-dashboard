import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Import Chart.js related module
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    AppComponent,
    BrowserModule,
    MatCardModule,
    NavbarComponent,
    NgxChartsModule
],
  providers: []
})
export class AppModule { }
