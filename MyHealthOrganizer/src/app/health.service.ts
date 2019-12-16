import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  providers = [];

  constructor() {}

  getItems() {
    return this.providers;
  }

  removeItem(i) {
    this.providers.splice(i, 1);
  }

  addItem(m) {
    this.providers.push(m);
  }

  async editItem(m, i) {
    this.providers[i] = m;
  }
}
