import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class CobseService {

  constructor(private http: HttpClient) { }
  getcobse(){
    return this.http.get(`${baseUrl}cobseandmhrd/get`)
  }
}
