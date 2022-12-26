import { Component, OnInit } from '@angular/core';
import { NewsAndPressService } from 'src/app/services/news-and-press.service';

@Component({
  selector: 'app-right-side-bar-contant',
  templateUrl: './right-side-bar-contant.component.html',
  styleUrls: ['./right-side-bar-contant.component.css']
})
export class RightSideBarContantComponent implements OnInit {
allNews:any
  constructor( private newsService:NewsAndPressService) { }

  ngOnInit(): void {

    this.newsService.getAllData().subscribe(
      (data)=>{
        console.log(data);
        this.allNews=data;
      
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
