import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';

import { AplicationsService } from '../services/aplications.service';
import { IJob } from '../model/IJob';

const job: IJob = {
    id_job: 0,
    jobName: '',
    descricao: '',
    empresa: '',
    link: '',
    empAnun: '',
    linkAnun: '',
    data: '',
    hora: '',
    activeStatus: true,
    statusDescription: [],
    lastUpdatedDay: '',
    lastUpdatedTime: '',
}

export const jobsResolver: ResolveFn<IJob> = (route, state) => {

	if(route.params && route.params['id']){
		return inject(AplicationsService).loadById(route.params['id']);
	}
	return of(job);
};
