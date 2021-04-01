import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public clients = [];
  public selectedYear = 2019;

  constructor(private _clientService: ClientsService) { }

  ngOnInit(): void {
    this._clientService.getAll()
    .subscribe((clients:any) => {
      this.clients = clients.map(client => client.y2019);
      console.log(this.clients);
    });
  }


}
