import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getAll(year: any) {
    return this.http.get(`/api/${year}/clients`);
  }

  getById() {
    return 'By Id';
  }
}
