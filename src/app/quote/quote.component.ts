import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'The purpose of our lives is to be happy', 'Dalai Lama'),
    new Quote(2, 'Get busy living or get busy dying', 'Stephen King'),
  ];

  toggleDetails(index:any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(toDelete:any, index:any){
    if(toDelete) {
      let nowDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (nowDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
