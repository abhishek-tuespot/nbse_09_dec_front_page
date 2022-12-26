import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class BoardVisionService {

  constructor(private http:HttpClient) { }

  getboardvision(){
    return this.http.get(`${baseUrl}boardvision/get`)
  }
}
