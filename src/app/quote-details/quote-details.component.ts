import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {


  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() isUpvote = new EventEmitter<boolean>();
  @Output() isDownvote = new EventEmitter<boolean>();





  upVote(upvoted:boolean){
    this.isUpvote.emit(upvoted);
  }

  downVote(downvoted:boolean){
    this.isDownvote.emit(downvoted);
  }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
