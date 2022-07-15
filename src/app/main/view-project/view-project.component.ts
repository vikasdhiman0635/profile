import { ProjectService } from './../../Service/project.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  id: any;

  project:any

  constructor(
    private aroute: ActivatedRoute,
    private service: ProjectService
  ) { }

  ngOnInit(): void {
    this.id = this.aroute.snapshot.params['id'];
    console.log(this.id);
    if(this.id!=null)
    {
      this.project=this.service.getById(this.id);
      console.log(this.project);
    }
  }

}
