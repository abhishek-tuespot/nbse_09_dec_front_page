import { Component, OnInit } from '@angular/core';
import { BoardVisionService } from 'src/app/services/board-vision.service';

@Component({
  selector: 'app-board-vision',
  templateUrl: './board-vision.component.html',
  styleUrls: ['./board-vision.component.css']
})
export class BoardVisionComponent implements OnInit {

  visionData:any;
  constructor(private service:BoardVisionService) { }

  ngOnInit(): void {
  this.service.getboardvision().subscribe(
    (data)=>{
      this.visionData=data;
    }
  )
  }

}
