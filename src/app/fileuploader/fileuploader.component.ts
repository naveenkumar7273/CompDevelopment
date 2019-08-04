import { Component, OnInit } from '@angular/core';
import  {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent implements OnInit {
  inputdata:string;//to store input data
  data={};//to store json data
  dis = false;// to hide the component in the same page
  display: boolean = false;//to hide the popup
  uploadedFiles: any[] = [];//to store the uploaded files

  ngOnInit() {
  }
  //to convert string data to json data
  read()
  {
    this.data = JSON.parse(this.inputdata);
    console.log(this.data);
  }
  //to display the component in the same page
  displaycomponent()
  {
    this.read();
    this.dis = true;
  }
  //to display the component in popup
  showDialog() {
    this.read();
      this.display = true;
  }


  constructor(private messageService: MessageService) {}
  //to store the uploaded files
  onUpload(event) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
      
      this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
  }
  
  onBasicUpload(event) {
      this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
  }
  
  onBasicUploadAuto(event) {
      this.messageService.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
  }







  

}
