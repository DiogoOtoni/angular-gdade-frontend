import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {IJob} from '../model/IJob';
import { first, delay } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AplicationsService {

	private readonly API = "http://localhost:8080/api/jobs"; //cuidado com a primeira BARRA

	constructor(private httpClient: HttpClient) { }

	list() {
		return this.httpClient.get<IJob[]>(this.API).pipe(first(), delay(2000));
	}

	loadById(id: number) {
		return this.httpClient.get<IJob>(`${this.API}/${id}`);
	}

	save(record: Partial<IJob>, id: number){
		if(id){
			return this.update(record, id);
		}
		return this.create(record);
	}

	private create(record: Partial<IJob>) {
		return this.httpClient.post<IJob>(this.API, record).pipe(first());
	}

	private update(record: Partial<IJob>, id: number){
		return this.httpClient.patch<IJob>(`${this.API}/${id}`, record).pipe(first());
	}

	remove() {

	}


}
