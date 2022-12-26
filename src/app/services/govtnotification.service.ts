import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class GovtnotificationService {

  constructor(private http: HttpClient) { }
  getgovnotification(){
    return this.http.get(`${baseUrl}govt_notification/get`)
  }
}
