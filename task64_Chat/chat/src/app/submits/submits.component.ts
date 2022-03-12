import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submits',
  templateUrl: './submits.component.html',
  styleUrls: ['./submits.component.scss']
})
export class SubmitsComponent {

  @Input()
  submint: string[] = [];

}
