import { Component, OnInit } from '@angular/core';
import  {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent implements OnInit {
  inputdata:string;
  data:JSON;
  dis = false;

  ngOnInit() {
  }
  uploadedFiles: any[] = [];
  read()
  {
    this.data = JSON.parse(this.inputdata);
    console.log(this.data);
  }

  displaycomponent()
  {
    this.read();
    this.dis = true;
  }



  display: boolean = false;

  showDialog() {
    this.read();
      this.display = true;
  }


  constructor(private messageService: MessageService) {}

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
