import { Component, Input, OnInit } from '@angular/core';
import { Sticker } from '../sticker.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor() { }
  @Input()
  stickers: Sticker[] = [];
  
  ngOnInit(): void {
  }

}
