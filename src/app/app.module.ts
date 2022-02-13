import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayervideoComponent } from './components/playervideo/playervideo.component';
import { FormsModule } from '@angular/forms';
import { FotoComponent } from './components/foto/foto.component';
import { HttpClientModule } from '@angular/common/http';
import { ContattamiComponent } from './components/contattami/contattami.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    PortfolioComponent,
    HeaderComponent,
    PlayervideoComponent,
    FotoComponent,
    ContattamiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
