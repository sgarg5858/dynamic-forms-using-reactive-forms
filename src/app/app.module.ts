import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import {HttpClientModule} from '@angular/common/http';
import { DynamicInputComponent } from './dynamic-controls/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './dynamic-controls/dynamic-select/dynamic-select.component';
import { DynamicBaseComponent } from './dynamic-controls/dynamic-base/dynamic-base.component'
@NgModule({
  declarations: [
    AppComponent,
    DynamicInputComponent,
    DynamicSelectComponent,
    DynamicBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DynamicFormComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
