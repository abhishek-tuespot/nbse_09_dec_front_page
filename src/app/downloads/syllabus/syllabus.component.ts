import { Component, OnInit } from '@angular/core';
import { ProspactusService } from 'src/app/services/prospactus.service';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {
  show:any;
  constructor( private syllabus:ProspactusService) { }

  ngOnInit(): void {
    this.syllabus.syllabus().subscribe(
      (data:any)=>{
        console.log(data);
        this.show=data;
        
      }
    )
  }

}
