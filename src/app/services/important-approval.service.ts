import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class ImportantApprovalService {

  constructor(private http: HttpClient) { }

  public getListOfApproval() {
    return this.http.get(`${baseUrl}uploadApprovals/get`);
  }
  public uploadApproval(data:any){
    return this.http.post(`${baseUrl}uploadApprovals/` ,data)
  }
 public getApprovalbyid(id:any){
    return this.http.get(`${baseUrl}uploadApprovals/` +id)
  }
  public deleteApproval(id:any){
    return this.http.delete(`${baseUrl}uploadApprovals/` +id)
  }
  public updateApproval(data:any){
    return this.http.put(`${baseUrl}uploadApprovals/` ,data)
  }
}