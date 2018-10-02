import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DonationService } from './services/donation.service';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MailLinkComponent } from './mail-link/mail-link.component';

@NgModule({
  declarations: [
    AppComponent,
    MailLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
  ],
  providers: [DonationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
