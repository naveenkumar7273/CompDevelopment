import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordComponent } from './password/password.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { StepnumberComponent } from './stepnumber/stepnumber.component';
import { FileuploaderComponent } from './fileuploader/fileuploader.component';
import {PiechartComponent} from './piechart/piechart.component';
import {EditorComponent} from './editor/editor.component';
import {CalComponent} from './cal/cal.component';

const routes: Routes = [
  {path:'password',component:PasswordComponent},
  {path:'paragraph',component:ParagraphComponent},
  {path:'checkbox',component:CheckboxComponent},
  {path:'stepnumber',component:StepnumberComponent},
  {path:'fileuploader',component:FileuploaderComponent},
  {path:'piechart',component:PiechartComponent},
  {path:'editor',component:EditorComponent},
  {path:'cal',component:CalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents =[PasswordComponent,EditorComponent,PiechartComponent,ParagraphComponent,CheckboxComponent,StepnumberComponent,
FileuploaderComponent,CalComponent];
