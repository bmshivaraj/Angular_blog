import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookService {

  constructor() { }

  getData()
  {
    return {
      itemName: 'salt',
      quantity: 5,
      id: 1
    }
  }
}
