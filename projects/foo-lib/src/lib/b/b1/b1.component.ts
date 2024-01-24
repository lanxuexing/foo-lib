import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BService } from '../b.service';

@Component({
  selector: 'foo-b1',
  template: `
    <h3>B1 works!</h3>
  `,
  styles: [``]
})
export class B1Component implements OnInit {
  constructor(
    // private http: HttpClient,
    private bService: BService
  ) { }

  ngOnInit(): void {
    // this.http.get('https://img.blingabc.com/c154d21d8fe34eb4b0e5468e5e7b47fb.txt', { responseType: 'text' }).subscribe(res => console.log('a1==', res))
    this.bService.getB();
  }
}
