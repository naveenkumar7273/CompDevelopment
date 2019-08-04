import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepnumber',
  templateUrl: './stepnumber.component.html',
  styleUrls: ['./stepnumber.component.css']
})
export class StepnumberComponent implements OnInit {
  val:number;//to store step number value
  inputdata:string;//to store the input string data
  data={};// to store json data
  dis =false;// to hide the component in the same page
  display: boolean = false;// to hide the popup
  
    constructor() { }
  
    ngOnInit() {
    }
    //to convert data from string to json
    read()
    {
      this.data = JSON.parse(this.inputdata);
      
    }
    //to display the component in the same page
   displaycomponent()
    {
     this.read();
     this.dis=true;
    }
    //to display the component in popup
    showDialog() {
      this.read();
        this.display = true;
    }
}
