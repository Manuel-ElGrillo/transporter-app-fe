import { Component } from '@angular/core';
import data from "../../fake-data/prices.json";
import { Prices } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public prices: Prices[] = data;

  constructor() {}

}
