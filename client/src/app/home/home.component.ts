import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public clients = [];
  public selectedYear = 2020;
  public loadingClients = false;

  constructor(private _clientService: ClientsService) { }

  ngOnInit(): void {
    this.loadClients(this.selectedYear);
  }

  openAddClientModal() {
    (document.querySelector('.add-client') as HTMLElement).style.display = 'block';
  }

  loadClients(year: any) {
    this.loadingClients = true;
    this._clientService.getAll(year)
      .subscribe((clients: any) => {
        this.loadingClients = false;
        this.clients = clients.filter((client) => {
          if (client['y' + this.selectedYear]) {
            return true
          }
        }).map(client => ({
          ...client['y' + this.selectedYear],
          _id: client._id,
          2019: client?.y2019?.signaletique ? true : false,
          2020: client?.y2020?.signaletique ? true : false
        }));
        this.loadingClients = false;
      });
  }

  calculateParcent(...val) {
    return 10;
  }

  calculateParcent2(...val) {
    return 20;
  }
}
