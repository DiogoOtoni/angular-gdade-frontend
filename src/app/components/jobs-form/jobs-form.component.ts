import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, UntypedFormArray, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { IJob } from 'src/app/model/IJob';
import { AplicationsService } from 'src/app/services/aplications.service';

@Component({
	selector: 'app-jobs-form',
	templateUrl: './jobs-form.component.html',
	styleUrls: ['./jobs-form.component.css']
})
export class JobsFormComponent implements OnInit {

	form!: FormGroup;
	@Input() contem: boolean = false;
	@Input() idShow!: number;
	@Input() activeStatus!: boolean;
	@Input() jobData!: IJob;

	constructor(
		private formBuilder: NonNullableFormBuilder,
		private aplicationsService: AplicationsService,
		private route: ActivatedRoute,
		private location: Location,
		private router: Router
	) { }

	ngOnInit(): void {

		const job: IJob = this.route.snapshot.data['job'];

		this.form = this.formBuilder.group(
			{
				jobName: [job.jobName],
				descricao: [job.descricao],
				empresa: [job.empresa],
				link: [job.link],
				empAnun: [job.empAnun],
				linkAnun: [job.linkAnun],
				data: [job.data],
				hora: [job.hora],
				statusDescription: this.formBuilder.array(this.retrieveJobsStatusDescription(job))
			}
		);

		if (job.id_job) {
			this.contem = true;
			this.idShow = job.id_job;
			this.jobData = job;
		}
		if (job.activeStatus) {
			this.activeStatus = job.activeStatus;
		}
	}

	private retrieveJobsStatusDescription(job: IJob) {
		const statusDescription = [];

		if (job.statusDescription) {
			job.statusDescription.forEach(statusDesc => statusDescription.push(this.createStatusDescription(statusDesc)));
		} else {
			statusDescription.push(this.createStatusDescription())
		}

		return statusDescription;
	}

	private createStatusDescription(statusDesc: string = '') {
		return this.formBuilder.control(statusDesc)
	}

	get statusDescription() {
		return this.form.get('statusDescription') as FormArray;
	}

	addStatusDescription() {
		this.statusDescription.push(this.formBuilder.control(''));
	}

	onSubmit() {
		const id = Number(this.route.snapshot.paramMap.get("id"));
		console.log(id)

		this.aplicationsService.save(this.form.value, id).subscribe({
			next: data => console.log(data),
			error: erro => console.log(erro)
		});

		this.goToHome();
	}

	private goToHome() {
		this.router.navigate([''])
	}

	onCancel() {
		this.goToHome();
	}

	private reloadPage(){
		window.location.reload();
	}

	onDelete() {
		this.aplicationsService.remove(this.idShow).subscribe({
			next: data => console.log(data),
			error: erro => console.log(erro)
		});
		this.reloadPage();
	}
}
