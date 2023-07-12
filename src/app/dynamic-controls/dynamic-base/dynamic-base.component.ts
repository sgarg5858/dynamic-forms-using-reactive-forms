import { Component, OnInit, inject } from '@angular/core';
import { CONTROL_DATA } from '../control.token';
import { AbstractControl, ControlContainer, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { DynamicControl } from '../dynamic-form.model';

@Component({
  selector: 'app-dynamic-base',
  template:"",
  styles:[],
  standalone:true,
  
})
export class DynamicBaseComponent implements OnInit {
  control = inject(CONTROL_DATA);

  formControl:AbstractControl = new FormControl(this.control.config.value,this.resolveValidatorsForControlFromConfig(this.control.config));

  parentFormGroup = inject(ControlContainer,{skipSelf:true});

  ngOnInit(): void {
     (this.parentFormGroup.control as FormGroup).addControl(this.control.controlKey,this.formControl)
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
      if(validatorKey === 'requiredTrue')
      {
        return Validators.requiredTrue;
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
