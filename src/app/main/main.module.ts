import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { FullStackDeveloperComponent } from './full-stack-developer/full-stack-developer.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ResumeComponent } from './resume/resume.component';
import { ServiceComponent } from './service/service.component';
import { ProjectComponent } from './project/project.component';
import { ViewProjectComponent } from './view-project/view-project.component';
declare var $: any;

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    SkillsComponent,
    AchievementsComponent,
    FullStackDeveloperComponent,
    CertificatesComponent,
    ResumeComponent,
    ServiceComponent,
    ProjectComponent,
    ViewProjectComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
