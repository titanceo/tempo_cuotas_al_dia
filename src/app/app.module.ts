import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from 'src/core/components/tabs/tabs.component';
import { ExcepcionComponent } from 'src/excepciones/components/excepcion/excepcion.component';
import { TasaComponent } from 'src/tasas/components/tasa/tasa.component';
import { CoreModule } from 'src/core/core.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ExcepcionComponent,
    TasaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
