import { ViewProjectComponent } from './view-project/view-project.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ResumeComponent } from './resume/resume.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: "", redirectTo: 'h', pathMatch: 'full'
  },
  {
    path: 'h', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'resume', component: ResumeComponent
  },
  {
    path: 'service', component: ServiceComponent
  },
  {
    path: 'project', component: ProjectComponent
  },
  {
    path: 'viewProject/:id', component: ViewProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
