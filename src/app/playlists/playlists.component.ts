import { Component, OnInit } from '@angular/core';
import {Breakpoints, BreakpointObserver,  BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.sass']
})
export class PlaylistsComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) {}
  
  IsPC:Boolean = true;
  
  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.IsPC = true; 
          console.log('True more than 600px')
        } else {
          this.IsPC = false;
          console.log('False less than 600px')

        }
      });
  }
}
