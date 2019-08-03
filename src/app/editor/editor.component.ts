import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  text1: string = 'Start From Here';
  display: boolean = false;
    
  text2: string;
  constructor() { }

  ngOnInit() {
  }
  showDialog()
  {
    this.display=true;
  }

}
