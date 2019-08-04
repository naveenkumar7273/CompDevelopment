import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  text1: string = 'Start From Here';//to store the data from editor
  display: boolean = false;//to hide the popup
    
  text2: string;//to store the editor data from popup
  constructor() { }

  ngOnInit() {
  }
  //to display popup
  showDialog()
  {
    this.display=true;
  }

}
