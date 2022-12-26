import { Component, OnInit } from '@angular/core';
import { ChairmanMessageService } from 'src/app/services/chairman-message.service';

@Component({
  selector: 'app-chairman-message',
  templateUrl: './chairman-message.component.html',
  styleUrls: ['./chairman-message.component.css']
})
export class ChairmanMessageComponent implements OnInit {

  chairmanData:any;
  constructor(private service:ChairmanMessageService) { }

  ngOnInit(): void {
    this.service.getchairmanmessage().subscribe(
      (data)=>{
        this.chairmanData=data;
      }
    )
  }

}
