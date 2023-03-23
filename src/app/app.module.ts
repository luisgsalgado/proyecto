import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RidesComponent } from './pages/rides/rides.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    DashboardComponent,
    RidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
