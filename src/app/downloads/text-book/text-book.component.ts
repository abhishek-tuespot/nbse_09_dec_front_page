import { Component, OnInit } from '@angular/core';
import { ProspactusService } from 'src/app/services/prospactus.service';

@Component({
  selector: 'app-text-book',
  templateUrl: './text-book.component.html',
  styleUrls: ['./text-book.component.css']
})
export class TextBookComponent implements OnInit {

  showtextbook:any;
  constructor( private downloadtextbook:ProspactusService) { }

  ngOnInit(): void {

    this.downloadtextbook.textbook().subscribe(
      (data:any)=>{
        console.log(data);
        this.showtextbook=data;
        
      }
    )
  }

}
