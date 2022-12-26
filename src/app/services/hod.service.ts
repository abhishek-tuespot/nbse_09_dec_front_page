import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class HODService {

  constructor(private http: HttpClient) { }
  getheadepartment(){
    return this.http.get(`${baseUrl}/headepartment/get`)
  }
}
