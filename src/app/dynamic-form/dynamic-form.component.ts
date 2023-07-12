import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { DynamicControl, DynamicFormConfig } from '../dynamic-controls/dynamic-form.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DynamicComponentResolver } from '../dynamic-controls/dynamic-component-resolver.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule]
})
export class DynamicFormComponent {

  constructor(
    private httpClient:HttpClient,
    protected dynamicComponentResolver:DynamicComponentResolver
    ){}

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
      const validators = this.resolveValidatorsForControlFromConfig(controls[key]);
      this.form.addControl(key, new FormControl(controls[key].value,validators))
    })
    console.log(this.form);
  }

  private resolveValidatorsForControlFromConfig({validators}:DynamicControl)
  {
    if(!validators) return [];

    return (Object.keys(validators) as Array<keyof typeof validators>).map((validatorKey)=>{

      const validatorValue = validators[validatorKey];

      if(validatorKey === 'required')
      {
        return Validators.required;
      }
      if(validatorKey === 'email')
      {
        return Validators.email;
      }
      if(validatorKey === 'minLength' && typeof validatorValue === 'number')
      {
        return Validators.minLength(validatorValue);
      }
      return Validators.nullValidator;
    })
  }

}
