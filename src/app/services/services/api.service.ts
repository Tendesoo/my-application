import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  postProduct(data:any){
    return this.http.post<any>("https://62612d40f429c20deb9c1471.mockapi.io/inventory",data)
  }

  getProduct(){
    return  this.http.get<any>("https://62612d40f429c20deb9c1471.mockapi.io/inventory")
  }
}
