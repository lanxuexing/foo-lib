import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BModule } from './b.module';

@Injectable({
  providedIn: 'any'
})
export class BService {

  constructor(
    private http: HttpClient
  ) { }

  getB() {
    this.http.get('https://img.blingabc.com/c154d21d8fe34eb4b0e5468e5e7b47fb.txt', { responseType: 'text' }).subscribe(res => console.log('a1==', res))
  }
}