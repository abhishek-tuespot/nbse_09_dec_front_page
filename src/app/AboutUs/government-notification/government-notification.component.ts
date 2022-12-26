import { Component, OnInit } from '@angular/core';
import { imgurl } from 'src/app/services/config';
import { GovtnotificationService } from 'src/app/services/govtnotification.service';

@Component({
  selector: 'app-government-notification',
  templateUrl: './government-notification.component.html',
  styleUrls: ['./government-notification.component.css']
})
export class GovernmentNotificationComponent implements OnInit {

  notificationData:any;
  FileUrl: any = "";

  fileUrl:any=`${imgurl}`;
  constructor( private govtNotificationService:GovtnotificationService) { }

  ngOnInit(): void {
    this.govtNotificationService.getgovnotification().subscribe(

      (data)=>{

        console.log(data);

        this.notificationData=data;

     

      }

    );
  }

}
