import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'Human spirit', 'mike','The human spirit must prevail over technology to allow humans be in charge.',new Date(2019,9,14),0,0),
    new Quote(2,'Technology','benja','Technology  the knack of so arranging  that we don’t have to experience it.',new Date(2019,6,9),0,0),
    new Quote(3,'The great myth','diana','The great myth of our times is that technology is communication.',new Date(2019,1,12),0,0),
    new Quote(4,'Communication','rick','Communications tools don’t get socially interesting until they get technologically boring.',new Date(2019,1,12),0,0),
    new Quote(5,'Code and people','madley','Programs must be written for people to read, and only incidentally for machines to execute.',new Date(2019,1,12),0,0),
    new Quote(6,'Tech and life','ken','For a list of all the ways technology has failed to improve the quality of life, please press three.',new Date(2019,1,12),0,0),
  ];


  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.unshift(quote)
  }

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

  upvotesQuote(isUpvotes:boolean,index:number){
    if(isUpvotes){
      this.quotes[index].upvotes +=1;
    }
  }
  downvotesQuote(isDownvotes:boolean,index:number){
    if(isDownvotes){
      this.quotes[index].downvotes +=1;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
}


