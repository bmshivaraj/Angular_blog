import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CookService } from './cook.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  myName = "shivarajbm";
  var1 = "";
  disabledProperty =false;
  show=true;
  color="red";
  enter_user_name = "enter name";
  fontColor = "green";
  data = ['satish', 'prakash', 'kishore']
  counter=1;

  cookingItem : any;

  
  constructor(cookingItem: CookService){
    console.warn(cookingItem.getData());
    this.cookingItem = cookingItem.getData();
  

  } 

 /* constructor(cookingItem: CookService){
    console.warn(cookingItem.getData());
    this.cookingItem = cookingItem.getData();
  } */

  userdetails={
    name:'shivaraj',
    age:38,
    address:'murugeshpalya'
  }
  
  data1 = [
    {
      name:'satish',
      age:35
    },
    {
      name:'sam',
      age:36
    },
    {
      name:'joy',
      age:37
    }
  ]


  fullName: string = "Hello JavaTpoint";   

  clickFunction(name)
  {
    alert(name);
  }
  
  clickEventDemo(event)
  {
    console.warn(event);
  }

  keyupFunction(event)
  {
    console.warn(event);
  }

  keydownFunction(event)
  {
    console.warn(event);
  }

  mouseoverFunction(myevent)
  {
    console.warn(myevent);
  }

  mouseleaveFunction(myevent)
  {
    console.warn(myevent);
  }

  keyupEnterFunction(myevent)
  {
    console.warn(myevent);
    this.var1 = myevent;
  }

  clickFunctionEnableProperty(myevent)
  {
    console.warn(myevent);
    this.disabledProperty = true;
  }

  getValues(value)
  {
    console.warn(value);
  }

  toggle=true;
  clickToChangeColor(value)
  {
    this.toggle = !this.toggle;
  }

  increment() {
    this.counter++;
  }

  onCounterChange(counter: number) {
    console.warn("we are in onCounterChange");
    this.counter = counter;
  }


}

