import { Component, OnInit } from '@angular/core';
import { ProspactusService } from 'src/app/services/prospactus.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  showdata:any;
  constructor(private uploadform:ProspactusService) { }

  ngOnInit(): void {

      this.uploadform.uploadform().subscribe(
        (data:any)=>{
          console.log(data);
          this.showdata=data;
        }
      )
  }

}
