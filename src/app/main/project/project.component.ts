import { Router } from '@angular/router';
import { ProjectService } from './../../Service/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: string = "active";

  projects: any[] | any;

  constructor(
    private service: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projects = this.service.getall();
  }


  check(id: any) {
    this.router.navigate(['/m/viewProject', id])
  }

}
