import { Component, Input} from '@angular/core';
import { Tvit } from '../tvit.model';

@Component({
  selector: 'app-twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.css']
})
export class TwitComponent{
    @Input()
    twits: Tvit[] = [];
}
