import { Component, OnInit } from '@angular/core';
import { HODService } from '../services/hod.service';


@Component({
  selector: 'app-head-of-department',
  templateUrl: './head-of-department.component.html',
  styleUrls: ['./head-of-department.component.css']
})
export class HeadOfDepartmentComponent implements OnInit {
  headepartmentData:any
  constructor( private service:HODService) { }

  ngOnInit(): void {

    this.service.getheadepartment().subscribe(
      (data)=>{
        console.log(data);
        this.headepartmentData=data;
      })
    }

}
