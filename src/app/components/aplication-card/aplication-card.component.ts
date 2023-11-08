import { Component, Input } from '@angular/core';
import {IJob} from 'src/app/model/IJob';

@Component({
  selector: 'app-aplication-card',
  templateUrl: './aplication-card.component.html',
  styleUrls: ['./aplication-card.component.css']
})
export class AplicationCardComponent {

	@Input() jobs: IJob[] = [];

	constructor(){

	}

}
