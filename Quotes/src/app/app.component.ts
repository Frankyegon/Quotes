import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    //{id:1, name:'Happiness inside'},
    //{id:2,name:'quit talking and begin doing'},
    //{id:3,name:'time is limited new phone case'},
  ]
}
