import { Component, OnInit } from '@angular/core';
import { ProspactusService } from '../services/prospactus.service';

@Component({
  selector: 'app-propectus',
  templateUrl: './propectus.component.html',
  styleUrls: ['./propectus.component.css']
})
export class PropectusComponent implements OnInit {

  showdata:any;
  constructor(private prospactusService:ProspactusService) { }

  ngOnInit(): void {
   
    this.prospactusService.getdata().subscribe(
      (data:any)=>{
        console.log(data);
        this.showdata=data;
      }
    )
  }

}
