import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ConfigService implements Resolve<any> {

  constructor(private http: HttpClient) { }

  // Api URL
  url = "https://toychihuan.pe/api"
  user = "88IF8ACDS6WB5WLG5IQR3IQBW33DNX4T"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa(this.user + ":")
    }),
    params: new HttpParams({
      fromObject: {
        output_format: "JSON",
        display: "full"

      }
    })
  }

  resolve(): any {

    return this.http.get("/api/categories", this.httpOptions)

  }








}
