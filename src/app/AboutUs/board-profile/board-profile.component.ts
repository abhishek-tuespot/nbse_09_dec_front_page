import { Component, OnInit } from '@angular/core';
import { BoardProfleService } from 'src/app/services/board-profle.service';

@Component({
  selector: 'app-board-profile',
  templateUrl: './board-profile.component.html',
  styleUrls: ['./board-profile.component.css']
})
export class BoardProfileComponent implements OnInit {

  boardprofileData:any;
  constructor(private service:BoardProfleService) { }

  ngOnInit(): void {
    this.service.getboardprofile().subscribe(
      (data)=>{
        this.boardprofileData=data;
        console.log(this.boardprofileData);
        
      }
    )
  }

}
