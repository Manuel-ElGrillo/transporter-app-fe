import { Component } from '@angular/core';
import { Travels } from '../interfaces/interfaces';
import data from "../../fake-data/travels.json";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public travels: Travels[] = data;

  constructor() {}

}
