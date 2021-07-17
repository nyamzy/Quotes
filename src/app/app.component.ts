import { Component } from '@angular/core';
import { Quote } from "./quote";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id: 1, name:'The purpose of our lives is to be happy'},
    {id: 2, name:'Get busy living or get busy dying'},
  ];
}
