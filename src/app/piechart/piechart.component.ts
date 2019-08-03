import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  inputdata:string;
  data: any;
  dis =false;

  constructor() {
    
  }

  ngOnInit() {
  }
  read()
  {
    this.data = JSON.parse(this.inputdata);
}
displaycomponent()
{
  this.read();
  this.dis =true;
}


display: boolean = false;

  showDialog() {
    this.read();
      this.display = true;
  }




}
