import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class NewsAndPressService {

  constructor(private http: HttpClient) { }
  getAllData(){
    return this.http.get(`${baseUrl}newsandpress_release/get`)
}
}
