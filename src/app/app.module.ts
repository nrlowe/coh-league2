import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-router.module';
import { AppComponent } from './app.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { UserComponent } from './user/user.component';
import { RankingsComponent } from './rankings/rankings.component';
import { ToolsComponent } from './tools/tools.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FrontpageComponent } from './frontpage/frontpage.component';

@NgModule({
  declarations: [
    AppComponent,
    TournamentsComponent,
    UserComponent,
    RankingsComponent,
    ToolsComponent,
    NavbarComponent,
    FooterComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
