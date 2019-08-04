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

  selectedCities: string[] = [];//to store the values of the selected checkboxes

  selectedCategories: string[] = ['Technology', 'Sports'];
  
  checked: boolean = false;//to hide the popup
  dis = false;//to hide the component in the same page

  inputdata:string;//to store the input data 
  data=[];//to store json data
  display: boolean = false;//to hide the popup


    //to convert string data to json
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
   
    //to display the popup
    showDialog() {
      this.read();
        this.display = true;
    }


}
