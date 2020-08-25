import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,'Happiness inside','chinua',new Date(2020,11,14)),
    new Quote(2,'quit talking and begin doing','achebe',new Date(2020,9,14)),
    new Quote(3,'time is limited new phone case','ngugi',new Date(2020,9,1)),
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  completeQuote(isComplete,index){
    if(isComplete) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
