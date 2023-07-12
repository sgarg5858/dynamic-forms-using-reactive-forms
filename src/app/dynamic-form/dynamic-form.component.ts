import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subject, map, switchMap, tap } from 'rxjs';
import { DynamicControl, DynamicFormConfig } from '../dynamic-controls/dynamic-form.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicComponentResolver } from '../dynamic-controls/dynamic-component-resolver.service';
import { ControlInjectorPipe } from '../dynamic-controls/control-injector.pipe';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,ControlInjectorPipe]
})
export class DynamicFormComponent {

  constructor(
    private httpClient:HttpClient,
    protected dynamicComponentResolver:DynamicComponentResolver
    ){}


  protected formLoadingTrigger = new Subject<'user'|'company'>();

  formConfig$:Observable<{form:FormGroup,config:DynamicFormConfig}> = this.formLoadingTrigger.pipe(
    switchMap((config)=> this.httpClient.get<DynamicFormConfig>(`/assets/${config}.form.json`)),
    map((formConfig)=>({
      form:new FormGroup({}),
      config:formConfig
    }))
  )
 


  onSubmit()
  {
  }

}
