import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor1',
  templateUrl: './editor1.component.html',
  styleUrls: ['./editor1.component.css']
})
export class Editor1Component implements OnInit {

  text1: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
    
  text2: string;


  constructor() { }

  ngOnInit() {
  }
  
  display: boolean = false;

    showDialog() {
        this.display = true;
    }


}
