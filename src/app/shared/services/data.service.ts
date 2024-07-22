import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  countSignal= signal(0);
  showLoaderSignal = signal(false);

  constructor() { }

  setCount(value: number) {
    this.countSignal.set(value);
  }

  setShowLoader(value: boolean) {
    this.showLoaderSignal.set(value);
  }



}
