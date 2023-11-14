import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-primary',
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.css']
})


export class BtnPrimaryComponent {


	@Input() content: string = '';

	constructor(){

	}
}
