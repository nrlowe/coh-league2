import { Component, OnInit } from '@angular/core';
import { Tournament } from '../models/tournament';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  //get active tournaments / upcoming tournaments - get player rankings
  //show live twitch streams?
  liveTournaments : Tournament[] = []; 
  ngOnInit(): void {
    for(var i = 0; i < 5; i++){
      this.liveTournaments.push(new Tournament(i, "Test Tournament " + i, "CoH 2",  new Date().toDateString()));
    }
  }

}
