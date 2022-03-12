import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  
  date: string = "";
  name: string = "";
  text: string = "";

  @Output() 
  onClick = new EventEmitter<{date: string, name: string, text: string}>();
  
  enterSticker($event: any) {


      if(this.name == "" || this.text == "" || this.date == "")
          return;

      let data: any = {date: this.date, name: this.name, text: this.text}; //!

      this.onClick.emit(data); //!

      this.date = "";
      this.name = "";
      this.text = "";
  }

  constructor() { }

  ngOnInit(): void {

  }

}