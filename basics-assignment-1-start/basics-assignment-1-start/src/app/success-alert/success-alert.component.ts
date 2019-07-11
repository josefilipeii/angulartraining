import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert .success',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  
  message:string;

  constructor() { }

  ngOnInit() {

    this.message="Success message";
  }

  

}
