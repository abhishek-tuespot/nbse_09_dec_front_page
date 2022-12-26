import { Component, OnInit } from '@angular/core';
import { ProspactusService } from '../services/prospactus.service';

@Component({
  selector: 'app-putquary',
  templateUrl: './putquary.component.html',
  styleUrls: ['./putquary.component.css']
})
export class PutquaryComponent implements OnInit {

  show:any={}
  constructor(private service:ProspactusService) { }

  ngOnInit(): void {
  }

  insertdata(){
    this.service.putinquiry(this.show).subscribe(
      (data:any)=>{
        console.log(data);
      }
    )
  }

}
