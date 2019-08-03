import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedCities: string[] = [];

  selectedCategories: string[] = ['Technology', 'Sports'];
  
  checked: boolean = false;
  dis = false;

  inputdata:string;
  data:JSON[];
    
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
