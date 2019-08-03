import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
inputdata:string;
data={};
dis = false;
password:string;
  constructor() { }

  ngOnInit() {
  }
  read()
  {
    this. data = JSON.parse(this.inputdata);
  }
  displaycomponent()
  {
    this.read();
    console.log(this.data);
    this.dis=true;
  }

  display: boolean = false;

    showDialog() {
      this.read();
        this.display = true;
    }

}
