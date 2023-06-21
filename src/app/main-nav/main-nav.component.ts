import { Component } from '@angular/core';
import {Breakpoints, BreakpointObserver,  BreakpointState} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.sass']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public Router: Router) {}
  
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
