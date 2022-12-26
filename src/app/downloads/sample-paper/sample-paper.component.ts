import { Component, OnInit } from '@angular/core';
import { ProspactusService } from 'src/app/services/prospactus.service';

@Component({
  selector: 'app-sample-paper',
  templateUrl: './sample-paper.component.html',
  styleUrls: ['./sample-paper.component.css']
})
export class SamplePaperComponent implements OnInit {

  showpaper:any;
  constructor( private samplepaper:ProspactusService) { }

  ngOnInit(): void {
    this.samplepaper.samplepaper().subscribe(
      (data:any)=>{
        console.log(data);
        this.showpaper=data;
        
      }
    )
  }

}
