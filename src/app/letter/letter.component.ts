import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import Donation from '../models/donation.model';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss'],
  inputs: ['donator']
})
export class LetterComponent implements OnInit {
  donator: Donation;
  dataChange: EventEmitter<Donation> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
