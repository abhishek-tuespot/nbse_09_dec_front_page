import { Component, OnInit } from '@angular/core';
import { imgurl } from 'src/app/services/config';
import { VipmessageService } from 'src/app/services/vipmessage.service';

@Component({
  selector: 'app-vip-messages',
  templateUrl: './vip-messages.component.html',
  styleUrls: ['./vip-messages.component.css']
})
export class VipMessagesComponent implements OnInit {
  vipmessage:any
  fileUrl=`${imgurl}`;
  constructor(private vipservice:VipmessageService) { }

  ngOnInit(): void {
    this.vipservice.getvipmsg().subscribe(

      (data)=>{

        console.log(data);

        this.vipmessage=data;
      }

    );
  }

}
