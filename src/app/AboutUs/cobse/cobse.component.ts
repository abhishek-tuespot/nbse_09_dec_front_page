import { Component, OnInit } from '@angular/core';
import { CobseService } from 'src/app/services/cobse.service';
import { imgurl } from 'src/app/services/config';

@Component({
  selector: 'app-cobse',
  templateUrl: './cobse.component.html',
  styleUrls: ['./cobse.component.css']
})
export class CobseComponent implements OnInit {
  cobse:any
  fileUrl:any=`${imgurl}`;
  constructor( private cobseservice:CobseService) { }

  ngOnInit(): void {
    this.cobseservice.getcobse().subscribe(

      (data)=>{

        console.log(data);

        this.cobse=data;

     

      }

    );
  }

}
