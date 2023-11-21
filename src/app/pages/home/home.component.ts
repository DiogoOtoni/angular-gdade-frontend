import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { AplicationsService } from 'src/app/services/aplications.service';
import {IJob} from 'src/app/model/IJob';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	jobsData: IJob[] | null = null;
	inputSearchValue: string = '';
	inputSelectValue: string = '';

	constructor(private aplicationsService: AplicationsService){}

	/**
	 * Ao iniciar o componente
	 * jobsData recebe o vetor de IJobs ao "contrario - reverse"
	 */
	ngOnInit(): void {
		this.aplicationsService.list().subscribe(
			{
				next: data => this.jobsData = data.reverse(),
				error: error => console.log(error)
			}
		)
	}

	findBySearch() {
		const regex = new RegExp(this.inputSearchValue, "ig");
		if (this.jobsData != null && this.jobsData.length > 0 && this.inputSelectValue != '') {
			return this.jobsData.filter((item) => {
				if (this.inputSelectValue == 'jobName') {
					const myString = item.jobName;
					return myString.match(regex);
				};
				if (this.inputSelectValue == 'descricao') {
					const myString = item.descricao;
					return myString.match(regex);
				};
				if (this.inputSelectValue == 'empresa') {
					const myString = item.empresa;
					return myString.match(regex);
				};
				if (this.inputSelectValue == 'empAnun') {
					const myString = item.empAnun;
					return myString.match(regex);
				};
				return false
			});
		}else{
			return this.jobsData;
		}
	}
}
