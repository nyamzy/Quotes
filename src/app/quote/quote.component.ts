import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id: 1, name:'The purpose of our lives is to be happy'},
    {id: 2, name:'Get busy living or get busy dying'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
