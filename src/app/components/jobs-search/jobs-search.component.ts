import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { IJob } from 'src/app/model/IJob';
import { AplicationsService } from 'src/app/services/aplications.service';

@Component({
	selector: 'app-jobs-search',
	templateUrl: './jobs-search.component.html',
	styleUrls: ['./jobs-search.component.css']
})
export class JobsSearchComponent implements OnInit {

	inputSearchValue: string = '';
	inputSelectValue: string = '';

	jobsData: IJob[] | null = null;

	constructor(private aplicationsService: AplicationsService) {}

	ngOnInit(): void {
		this.aplicationsService.list().subscribe(
			data => {
				this.jobsData = data
			},
			error => console.log(error)
		)
	}

	findBySearch(tipoDeBusca: string, valorDeBusca: string) {

		const regex = new RegExp(valorDeBusca, "ig");

		if (this.jobsData != null) {
			return this.jobsData.filter((item) => {
				if (tipoDeBusca == 'jobName') {
					const myString = item.jobName;
					return myString.match(regex);
				};
				if (tipoDeBusca == 'descricao') {
					const myString = item.descricao;
					return myString.match(regex);
				};
				if (tipoDeBusca == 'empresa') {
					const myString = item.empresa;
					return myString.match(regex);
				};
				if (tipoDeBusca == 'empAnun') {
					const myString = item.empAnun;
					return myString.match(regex);
				};

			});
		}

		return null
	}
}
