import { Component, OnInit } from '@angular/core';
import {STYLIST} from 'src/app/stylistDB';
//import {Stylist} from 'src/app/stylist-list/stylist-list.component';

@Component({
  selector: 'app-stylist-list',
  templateUrl: './stylist-list.component.html',
  styleUrls: ['./stylist-list.component.css']
})
export class StylistListComponent implements OnInit {

  stylist = Stylist; 
  stylists = STYLIST;
  selectedStylist : Stylist;

  onSelect(stylist: Stylist):void{
    this.selectedStylist = stylist;
  }

  constructor() { }

  ngOnInit() {
  }

}
export class Stylist {
  id: number;
  name : String;
  state : String;
  rating : number;
  job: string;
}

