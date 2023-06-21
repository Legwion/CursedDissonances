import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from '../Artist';
import { ArtistListService } from '../artist-list.service';
import {Breakpoints, BreakpointObserver,  BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.sass']
})
export class ArtistComponent implements OnInit {

  artistList:Artist[]=[];
  artist:any = {};

  IsPC:Boolean = true;


  constructor(private activatedRoute:ActivatedRoute,
    private _ArtistListService:ArtistListService,
    private breakpointObserver: BreakpointObserver,
    public Router: Router
    ) {

      this.activatedRoute.params.subscribe(params =>{          
        this.artist = this._ArtistListService.getArtist(params['id'])
      })

     }

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
      this.artistList = this._ArtistListService.getArtistList();

    }

}
