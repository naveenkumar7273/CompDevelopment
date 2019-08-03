import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
  inputdata:string;
  data:JSON;
  dis = false;
    constructor() { }
  
    ngOnInit() {
    }
    read()
    {
      this.data = JSON.parse(this.inputdata);
      console.log(this.data);
      this.dis=true;
    }
    display: boolean = false;

    showDialog() {
        this.display = true;
    }


}
