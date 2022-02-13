import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattamiComponent } from './components/contattami/contattami.component';
import { FotoComponent } from './components/foto/foto.component';
import { HomeComponent } from './components/home/home.component';
import { PlayervideoComponent } from './components/playervideo/playervideo.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'playervideo', component: PlayervideoComponent},
  {path: 'foto', component: FotoComponent},
  {path: 'contattami', component: ContattamiComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
