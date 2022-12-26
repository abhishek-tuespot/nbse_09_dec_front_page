import { Component, OnInit } from '@angular/core';
import { ImportantApprovalsService } from 'src/app/services/important-approvals.service';

@Component({
  selector: 'app-important-apporvals',
  templateUrl: './important-apporvals.component.html',
  styleUrls: ['./important-apporvals.component.css']
})
export class ImportantApporvalsComponent implements OnInit {
approvalsData:any;
  constructor(private service:ImportantApprovalsService) { }

  ngOnInit(): void {
    this.service.getapprovals().subscribe(
      (data)=>{
        this.approvalsData=data;
      }
    )
  }

}
