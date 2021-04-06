import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-client',
  templateUrl: './create-new-client.component.html',
  styleUrls: ['./create-new-client.component.scss']
})
export class CreateNewClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeAddClientModal() {
    (document.querySelector('.add-client') as HTMLElement).style.display = 'none';
  }

}
