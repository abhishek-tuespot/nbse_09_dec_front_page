import { Component, OnInit } from '@angular/core';
import { ProspactusService } from 'src/app/services/prospactus.service';

@Component({
  selector: 'app-registration-card',
  templateUrl: './registration-card.component.html',
  styleUrls: ['./registration-card.component.css']
})
export class RegistrationCardComponent implements OnInit {

  insertData:any={};
  constructor( private getdata:ProspactusService) { }

  ngOnInit(): void {

  }

  insertdata(){
    this.getdata.getRegistrationNumber(this.insertData).subscribe(
        (data:any)=>{
          console.log(data);
        }
    )
  }
}
