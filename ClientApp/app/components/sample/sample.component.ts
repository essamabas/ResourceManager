
import { Component, OnInit } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}
@Component({
  selector: 'sample-cp',
  template: require('./sample.component.html'),
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
    
  title: string;
  hero: Hero;
  
  // initialise with Init
  ngOnInit() {
      this.title = 'Tour of Heroes';
      this.hero = {
          id: 2,
          name: 'Init'
      }
  }
}
