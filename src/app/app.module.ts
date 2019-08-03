//all the modules required for components are imported
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import {CommonModule} from '@angular/common';
import {PasswordModule} from 'primeng/password'
import {ToastModule} from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {InputTextareaModule} from 'primeng/inputtextarea'
import {CheckboxModule} from 'primeng/checkbox';
import {SpinnerModule} from 'primeng/spinner';
import {routingcomponents} from './app-routing.module';
import {DialogModule} from 'primeng/dialog';
import {ChartModule} from 'primeng/chart';
import {EditorModule} from 'primeng/editor';
import {PanelMenuModule} from 'primeng/panelmenu';
import {SidebarModule} from 'primeng/sidebar';
import {FullCalendarModule} from 'primeng/fullcalendar';
import { Editor1Component } from './editor1/editor1.component';



@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    Editor1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    DialogModule,
    ChartModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    CommonModule,
    FileUploadModule,
    PanelMenuModule,
    TabViewModule,
    SpinnerModule,
    ToastModule,
    EditorModule,
    ButtonModule,
    CodeHighlighterModule,
    PasswordModule,
    InputTextareaModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
