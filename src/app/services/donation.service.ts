import Donation from '../models/donation.model';
import { Observable } from 'rxjs/Rx';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';


//RxJS operator for mapping the observable

import 'rxjs/add/operator/map';

@Injectable()
export class DonationService {

  api_url = 'http://localhost:3000';
  donationUrl = `${this.api_url}/api/donations`;
  emailUrl = `${this.api_url}/api/donations/doWork`;
  constructor(
    private http: HttpClient
  ) { }

  //Create todo, takes a ToDo Object
  createDonation(donation: Donation): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.donationUrl}`, donation);
  }

  //Read todo, takes no arguments
  getDonations(): Observable<Donation[]>{
    return this.http.get(this.donationUrl)
    .map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as Donation[];
    })
  }
  //Update todo, takes a ToDo Object as parameter
  editDonation(donation:Donation){
    let editUrl = `${this.donationUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, donation);
  }

  deleteDonation(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.donationUrl}/${id}`
    return this.http.delete(deleteUrl)
    .map(res  => {
      return res;
    })
  }

  sendEmail(donation:Donation) {
    let sendUrl = `${this.emailUrl}`
    console.log("donation.service.ts reached"); 
    
    this.http.post(sendUrl, donation).subscribe(data => console.log(data));
    //return this.http.post(sendUrl, donation);
     
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}