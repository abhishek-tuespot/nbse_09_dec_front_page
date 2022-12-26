import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './config';
@Injectable({
  providedIn: 'root'
})
export class ProspactusService {

  constructor(private https:HttpClient ){ }

  getdata(){
   return this.https.get(`${baseUrl}prospectus/get`);
  }
  uploadform(){
    return this.https.get(`${baseUrl}uploadFroms/get`);
  }
  textbook(){
    return this.https.get(`${baseUrl}textBooks/get`);
  }
  samplepaper(){
    return this.https.get(`${baseUrl}sampleQuestionPaper/get`)
  }
  syllabus(){
    return this.https.get(`${baseUrl}syallbus/get`)
  }
  getRegistrationNumber(data:any){
     return this.https.post(`${baseUrl}registraion/insert`,data);
  }

  getadmitCard( data:any){
    return this.https.post(`${baseUrl}admitCard/save`,data);
  }
  putinquiry(data:any){
    return this.https.post(`${baseUrl}inquiry/insert`,data);
  }
  donation(data:any){
    return this.https.post(`${baseUrl}donation/insert`,data);
  }
}