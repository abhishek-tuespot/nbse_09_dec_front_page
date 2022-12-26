import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class BoardProfleService {

  constructor(private http:HttpClient) { }

  getboardprofile(){
    return this.http.get(`${baseUrl}boardprofile/get`)
  }

}
