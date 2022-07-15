import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private router: Router) { }

  @Input() project:string="";
  @Input() home:string="";
  @Input() about:string="";
  @Input() service:string="";
  @Input() resume:string="";

  ngOnInit(): void {
  }

  link(data: string) {
    if (data == "home") {
      this.router.navigate(['/m/home']);
    }
    else if (data == "about") {
      this.router.navigate(['/m/about']);
    }
    else if (data == "resume") {
      this.router.navigate(['/m/resume']);
    }
    else if(data == "service"){
      this.router.navigate(['/m/service'])
    }
    else if(data == "project")
    {
      this.router.navigate(['/m/project'])
    }
  }

}
