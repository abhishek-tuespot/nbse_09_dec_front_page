import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class VipmessageService {

 
  constructor(private http: HttpClient) { }
  getvipmsg(){
    return this.http.get(`${baseUrl}vipmessage/get`)
  }
}

