import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../card.model';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {

  constructor() { }
  @Input()
  cards: Card[] = [];

  ngOnInit(): void {
  }

}
