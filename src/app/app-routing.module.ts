import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { JobsFormComponent } from './components/jobs-form/jobs-form.component';
import { jobsResolver } from './guards/jobs.resolver';

const routes: Routes = [
	{
		path:'',
		pathMatch: 'full',
		component: HomeComponent
	},
	{
		path:'cadastro',
		component: JobsFormComponent,
		resolve: {job: jobsResolver}
	},
	{
		path:'details/:id',
		component: JobsFormComponent,
		resolve: {job: jobsResolver}
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
