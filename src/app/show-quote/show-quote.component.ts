import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.css']
})
export class ShowQuoteComponent implements OnInit {
  @Input() quote!:Quote
  constructor() { }

  ngOnInit(): void {
  }

}
