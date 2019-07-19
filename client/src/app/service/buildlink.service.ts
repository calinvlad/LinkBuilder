import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BuildlinkService {
  server = 'http://207.154.246.34:8000'

  constructor(
    private http: HttpClient
  ) { }

  build(params) {
    return this.http.post(`${this.server}/links`, params)
  }

  getByName(name) {
    return this.http.get(`${this.server}/links/${name}`)
  }
}
