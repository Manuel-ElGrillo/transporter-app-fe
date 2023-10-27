import { Component } from '@angular/core';
import data from "../../fake-data/clients.json";
import { Clients } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public clients: Clients[] = data;

  constructor() {}

}
