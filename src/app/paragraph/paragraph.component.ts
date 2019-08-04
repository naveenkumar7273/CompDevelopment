import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
  inputdata:string;//to store input data
  data={};// to store json data
  dis = false;//to hide the component in the same page
  display: boolean = false;//to hide the popup
    constructor() { }
  
    ngOnInit() {
    }
    //to convert string data to json data
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
    showDialog() 
    {
      this.read();
        this.display = true;
    }


}
