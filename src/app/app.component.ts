import { Response } from '@angular/http';
import { DonationService } from './services/donation.service';
import Donation from './models/donation.model';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  inputs: ['theDon'],
  outputs: ['theDon'],
})
export class AppComponent implements OnInit {
  title = 'digidons-angular';

  public theDon: Donation = new Donation()
  dataChange: EventEmitter<Donation> = new EventEmitter();

  @Output() eventClicked = new EventEmitter<Event>();

  constructor(
    //Private donationService will be injected into the component by Angular Dependency Injector
    private donationService: DonationService
  ) { }

  //Declaring the new donation Object and initilizing it
  public newDonation: Donation = new Donation()

  //An Empty list for the visible donations list
  donationsList: Donation[];

  //Edit list for tracking editable donations
  editDonations: Donation[] = [];

  ngOnInit(): void {

    this.dataChange.emit(this.theDon);

    //At component initialization the 
    this.donationService.getDonations()
      .subscribe(donations => {
        //assign the todolist property to the proper http response
        this.donationsList = donations
        console.log(donations)
      })
  }

  //This method will get called on Create button event
  
  create() {
    this.donationService.createDonation(this.newDonation)
      .subscribe((res) => {
        this.donationsList.push(res.data)
        this.newDonation = new Donation()
      })
  }

  editDonation(donation: Donation) {
    console.log(donation)
    if(this.donationsList.includes(donation)){
      if(!this.editDonations.includes(donation)){
        this.editDonations.push(donation)
        console.log("donation was addedto the list")
      }else{
        this.editDonations.splice(this.editDonations.indexOf(donation), 1)
        this.donationService.editDonation(donation).subscribe(res => {
          console.log('Update Succesful')
        }, err => {
          this.editDonation(donation)
          console.error('Update Unsuccesful')
        })
      }
    }
  }

  doneDonation(donation:Donation){
    donation.status = 'Done'
    this.donationService.editDonation(donation).subscribe(res => {
      console.log('Update Succesful')
    }, err => {
      this.editDonation(donation)
      console.error('Update Unsuccesful')
    })
  }

  submitDonation(event, donation:Donation){
    if(event.keyCode ==13){
      this.editDonation(donation)
    }
  }

  deleteDonation(donation: Donation) {
    this.donationService.deleteDonation(donation._id).subscribe(res => {
      this.donationsList.splice(this.donationsList.indexOf(donation), 1);
    })
  }


  sendEmail(donation: Donation) {
    console.log("app.component.ts reached")
    // don't send me emails while I'm debugging!
    // this.donationService.sendEmail(donation)
    this.theDon = donation;
    this.dataChange.emit(this.theDon);
  }

}
