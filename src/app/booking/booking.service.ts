import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface bookingData { 
  //TODO non null
  name: string ;
  last_name: string | null;
  email: string | null;
  tel: string | null;
  fulldate: { 
    day: number | null;
    month: number | null;
    time: number | null;
  };
  extras: {eName:string, eEmail:string, eTel:number}[]; 
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  constructor(private http:HttpClient) { }
  addPrenotazione(data: bookingData) {
    return this.http.post("/addBooking", data)
  }
}
