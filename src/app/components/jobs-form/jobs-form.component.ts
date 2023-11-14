import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, UntypedFormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IJob } from 'src/app/model/IJob';
import { AplicationsService } from 'src/app/services/aplications.service';

@Component({
  selector: 'app-jobs-form',
  templateUrl: './jobs-form.component.html',
  styleUrls: ['./jobs-form.component.css']
})
export class JobsFormComponent implements OnInit{

	form!: FormGroup;

	constructor(
		private formBuilder: NonNullableFormBuilder,
		private aplicationsService:AplicationsService,
		private route: ActivatedRoute
	){}

	ngOnInit(): void {

		const job: IJob = this.route.snapshot.data['job'];

		this.form = this.formBuilder.group({
			jobName: [job.jobName],
			descricao: [job.descricao],
			empresa: [job.empresa],
			link: [job.link],
			empAnun: [job.empAnun],
			linkAnun: [job.linkAnun],
			data: [job.data],
			hora: [job.hora]
		});

	}
}
