import { Component, OnInit } from '@angular/core';
import { imgurl } from 'src/app/services/config';
import { GovtnotificationService } from 'src/app/services/govtnotification.service';
import { PoliciesAndActsService } from 'src/app/services/policies-and-acts.service';
import { VipmessageService } from 'src/app/services/vipmessage.service';

@Component({
  selector: 'app-left-side-bar-content',
  templateUrl: './left-side-bar-content.component.html',
  styleUrls: ['./left-side-bar-content.component.css']
})
export class LeftSideBarContentComponent implements OnInit {
  notificationData:any
  policie:any
  fileUrl=`${imgurl}`;
  constructor(private govnotification:GovtnotificationService,private policies:PoliciesAndActsService) { }

  ngOnInit(): void {
    this.govnotification.getgovnotification().subscribe(

      (data)=>{

        console.log(data);

        this.notificationData=data;

     

      }

    );
    this.policies.getpolicies().subscribe(

      (data)=>{

        console.log(data);

        this.policie=data;

     

      }

    );
  }

}
