import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert .warning',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
 
  message:string;

  constructor() { }

  ngOnInit() {

    this.message="Warning message";
  }

}
