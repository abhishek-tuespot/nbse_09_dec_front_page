import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class ImportantApprovalsService {

  constructor(private http:HttpClient) { }

  getapprovals(){
    return this.http.get(`${baseUrl}uploadApprovals/get`)
  }
}
