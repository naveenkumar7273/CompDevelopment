import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  inputdata:string; //to store input string data
  data={};// to store json data
  dis =false;// to hide the component
  display: boolean = false;//to hide the popup

  constructor() {
    
  }

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
  this.dis =true;
  }
  //to display the component in popup
  showDialog() 
  {
    this.read();
      this.display = true;
  }




}
