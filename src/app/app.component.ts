import { Component  } from '@angular/core';
import  {MessageService} from 'primeng/components/common/messageservice';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent  {


    items: MenuItem[];// for storing menu items
    v =true;

    ngOnInit() {
        
        this.items = [
            {//link and labels of simple components are assined to items variable
                label: 'Simple Components',
                items: [{
                        label: 'Password', 
                        routerLink:"./password",
            
                        },
                        {
                        label: 'Paragraph', 
                        routerLink:"./paragraph"
                        },
                        {
                        label: 'Checkbox', 
                        routerLink:"./checkbox"
                         },
                         {
                        label: 'Step Number', 
                        routerLink:"./stepnumber"
                         }
                        ]
            },
            //link and labels of simple components are assined to items variable
            {
                label: 'Complex Components',
                items: [{
                        label: 'Calender', 
                        routerLink:"./cal"
                        },
                        {
                        label: 'File uploder', 
                        routerLink:"./fileuploader"
                        },
                        {
                        label: 'Editor', 
                        routerLink:"./editor"
                         },
                         {
                        label: 'Pie Chart', 
                        routerLink:"./piechart"
                         }
                        ]
            }
        ];
    }
  
}
