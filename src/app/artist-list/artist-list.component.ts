import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistListService } from '../artist-list.service';
import {Breakpoints, BreakpointObserver,  BreakpointState} from '@angular/cdk/layout';
import { Artist } from '../Artist';
@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.sass']
})
export class ArtistListComponent implements OnInit {

  artistList:Artist[]=[];
  IsPC:Boolean = true;


  constructor(private breakpointObserver: BreakpointObserver,
    private _ArtistListService:ArtistListService,
    private router:Router
    ) { }

  
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
        })
        
        this.artistList = this._ArtistListService.getArtistList();
        ;

      }
        
        verArtist (idx:number){
          this.router.navigate( ['/artist',idx]);
        }
        
}
