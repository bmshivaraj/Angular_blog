import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CookService} from '../cook.service'

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent implements OnInit {

cookingItem : any;
@Input() counter: number;
@Output() counterChange = new EventEmitter<number>();

@Input() hero
@Input() userdetails: any


  constructor(private cookingService: CookService) { }

  ngOnInit(): void {
    console.warn(this.hero);
    console.warn(this.userdetails);
    }

  increment() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

  getCookingServiceValues()
  {
    this.cookingItem = this.cookingService.getData();
    console.warn(this.cookingItem);
  }

}
