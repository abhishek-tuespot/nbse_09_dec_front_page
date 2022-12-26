import { Component, OnInit } from '@angular/core';
import { ProspactusService } from 'src/app/services/prospactus.service';

@Component({
  selector: 'app-admitcard',
  templateUrl: './admitcard.component.html',
  styleUrls: ['./admitcard.component.css']
})
export class AdmitcardComponent implements OnInit {

  getdata:any={};
  constructor(private service:ProspactusService) { }

  ngOnInit(): void {
   
  }
  insertdata(){
    this.service.getadmitCard(this.getdata).subscribe(
      (data:any)=>{
        console.log(data); 
      }
    )
  }

}
