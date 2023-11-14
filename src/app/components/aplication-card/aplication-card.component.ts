import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {IJob} from 'src/app/model/IJob';
import { AplicationsService } from 'src/app/services/aplications.service';

@Component({
  selector: 'app-aplication-card',
  templateUrl: './aplication-card.component.html',
  styleUrls: ['./aplication-card.component.css']
})
export class AplicationCardComponent {

	@Input() jobs: IJob[] = [];

	constructor(private router: Router){	}

	toDetails(job: IJob){
		this.router.navigate(['details', job.id_job]);
	}
}
