import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import Donation from '../models/donation.model';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss'],
  inputs: ['theDon'],
  outputs: ['theDon'],
  
})
export class LetterComponent implements OnInit {
  theDon: Donation;
  dataChange: EventEmitter<Donation> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    //this.dataChange.emit(this.theDon);

    console.log("at the letter");
  }

}
