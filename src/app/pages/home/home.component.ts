import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { AplicationsService } from 'src/app/services/aplications.service';
import {IJob} from 'src/app/model/IJob';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

	jobs$: Observable<IJob[]> | null = null;

	constructor(private aplicationsService: AplicationsService){
		this.refresh();
	}

	refresh(){
		this.jobs$ = this.aplicationsService.list().pipe(
			catchError(error => {
				console.log(error);
				return of([]);
			})
		)
	}



}
