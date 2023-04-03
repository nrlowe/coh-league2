import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { ToolsComponent } from './tools/tools.component';
import { RankingsComponent } from './rankings/rankings.component';
import { FrontpageComponent } from './frontpage/frontpage.component';


const routes: Routes = [
  //if loading have home be displayed
  { path: '',   redirectTo: 'frontpageComponent', pathMatch: 'full' },
  { path: 'frontpage', component: FrontpageComponent},
  { path: 'tournaments', component: TournamentsComponent},
  { path: 'rankings', component: RankingsComponent},
  { path: 'tools', component: ToolsComponent},
  
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }