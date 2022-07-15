import { Component,HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home:string="active";

  constructor(@Inject(DOCUMENT) private document:Document) { }

  ngOnInit(): void {
  }

}
