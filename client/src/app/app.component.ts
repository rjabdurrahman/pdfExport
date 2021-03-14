import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'client';
  constructor(private http: HttpClient) { }
  getContacts() {
    this.http.get('/api/phone_contacts?pass=vCwm7MpeYPrlJfOnPCe9').subscribe(x => console.log(x));
  }
}
