import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
inputdata:string;//to store the input data
data={};//to store json data
dis = false;//to hide the component in the same file
password:string;//to store the password
display: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  //to convert string data to json
  read()
  {
    this. data = JSON.parse(this.inputdata);
  }
  //to display the component in the same page
  displaycomponent()
  {
    this.read();
    console.log(this.data);
    this.dis=true;
  }
  //to display the component in popup
  showDialog() 
  {
    this.read();
    this.display = true;
  }

}
