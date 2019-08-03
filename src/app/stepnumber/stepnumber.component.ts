import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepnumber',
  templateUrl: './stepnumber.component.html',
  styleUrls: ['./stepnumber.component.css']
})
export class StepnumberComponent implements OnInit {
  val:number;

  inputdata:string;
  data:JSON;
  dis =false;
    constructor() { }
  
    ngOnInit() {
    }
    read()
    {
      this.data = JSON.parse(this.inputdata);
      
   }
   displaycomponent()
   {
     this.read();
     this.dis=true;
   }


    display: boolean = false;

    showDialog() {
      this.read();
        this.display = true;
    }
}
