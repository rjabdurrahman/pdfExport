import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('/api/2020/clients');
  }

  getById() {
    return 'By Id';
  }
}
