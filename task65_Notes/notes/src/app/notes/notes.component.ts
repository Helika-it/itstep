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

  deleteSticker(i:number):void{
    this.stickers.splice(i,1);
  }

  ngOnInit(): void {
  }

}
