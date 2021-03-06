import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() toDelete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.toDelete.emit(complete);
  }
  constructor() {}

  ngOnInit(): void {
  }

  likeVote = 0;
  like(){
    this.likeVote++;
  }

  dislikeVote = 0;
  dislike(){
    this.dislikeVote++;
  }

}
