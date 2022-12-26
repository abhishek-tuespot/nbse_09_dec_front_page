import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './config';

@Injectable({
  providedIn: 'root'
})
export class PoliciesAndActsService {
  constructor(private http: HttpClient) { }
  getpolicies(){
    return this.http.get(`${baseUrl}nationaleducationpolicies/get`)
}
}
