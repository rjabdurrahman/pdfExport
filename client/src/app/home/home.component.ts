import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _clientService: ClientsService) { }

  ngOnInit(): void {
    this._clientService.getAll()
    .subscribe(x => console.log(x));
  }

  public selectedYear = 2019;

  public clients = [

  ]

}
