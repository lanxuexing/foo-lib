import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AService } from '../a.service';

@Component({
  selector: 'foo-a1',
  template: `
    <h3>A1 works!</h3>
  `,
  styles: [``]
})
export class A1Component implements OnInit {
  constructor(
    // private http: HttpClient,
    private aService: AService
  ) { }

  ngOnInit(): void {
    // this.http.get('https://img.blingabc.com/c154d21d8fe34eb4b0e5468e5e7b47fb.txt', { responseType: 'text' }).subscribe(res => console.log('a1==', res))
    this.aService.getA();
  }
}
