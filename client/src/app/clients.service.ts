import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  getAll() {
    return 'All';
  }

  getById() {
    return 'By Id';
  }
}
