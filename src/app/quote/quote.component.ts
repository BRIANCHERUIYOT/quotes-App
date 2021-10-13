import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'Human spirit', 'The human spirit must prevail over technology to allow humans be in charge.'),
    new Quote(2,'Technology','Technology  the knack of so arranging  that we don’t have to experience it.'),
    new Quote(3,'The great myth','The great myth of our times is that technology is communication.'),
    new Quote(4,'Communication','Communications tools don’t get socially interesting until they get technologically boring.'),
    new Quote(5,'Code and people','Programs must be written for people to read, and only incidentally for machines to execute.'),
    new Quote(6,'Tech and life','For a list of all the ways technology has failed to improve the quality of life, please press three.'),
  ];

  toggleDetails(index:number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete: boolean, index:number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }  
  }

  deleteQuote(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
}
