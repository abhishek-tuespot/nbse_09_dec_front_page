import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class ChairmanMessageService {

  constructor(private http:HttpClient) { }

  getchairmanmessage(){
    return this.http.get(`${baseUrl}chairman_message/get`)
  }
}
