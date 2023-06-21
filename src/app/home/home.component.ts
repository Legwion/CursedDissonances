import { Component, OnInit } from '@angular/core';
import {Breakpoints, BreakpointObserver,  BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

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
