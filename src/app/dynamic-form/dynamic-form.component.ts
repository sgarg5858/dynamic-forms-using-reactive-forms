import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { DynamicFormConfig } from '../dynamic-controls/dynamic-form.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule]
})
export class DynamicFormComponent {

  constructor(private httpClient:HttpClient){}

  form!:FormGroup;

  protected formLoadingTrigger = new Subject<'user'|'company'>();

  formConfig$:Observable<DynamicFormConfig> = this.formLoadingTrigger.pipe(
    switchMap((config)=> this.httpClient.get<DynamicFormConfig>(`/assets/${config}.form.json`)),
    tap((formConfig)=>{
      this.buildForm(formConfig.controls);
    })
  )
  private buildForm(controls:DynamicFormConfig['controls'])
  {
    this.form = new FormGroup({});
    Object.keys(controls).forEach((key)=>{
      this.form.addControl(key, new FormControl(controls[key].value))
    })
    console.log(this.form);
  }
}
