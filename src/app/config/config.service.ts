import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // Api URL
  url = "https://toychihuan.pe/api"
  // user = 'ZBZFGYU47RTGVJL191H2I72BSDDJDM36'
  user = "88IF8ACDS6WB5WLG5IQR3IQBW33DNX4T"


  basic_auth = "Basic " + this.user

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    params: new HttpParams({
      fromObject: {
        ws_key: this.user,
        output_format: "JSON",
        display: "full"

      }
    })
  }


  constructor(private http: HttpClient) { }


  getCategories() {
    return this.http.get("/api/categories", this.httpOptions)
  }


}
