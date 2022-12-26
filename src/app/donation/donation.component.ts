import { Component, OnInit } from '@angular/core';
import { ProspactusService } from '../services/prospactus.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  show:any={};
  constructor( private service:ProspactusService) { }

  ngOnInit(): void {
  }

    insertdata(){
      this.service.donation(this.show).subscribe(
        (data:any)=>{
          console.log(data);
          
        }
      )
    }
}
