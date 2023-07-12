import { Injectable, Type } from '@angular/core';
import { DynamicControl } from './dynamic-form.model';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './dynamic-select/dynamic-select.component';

type DynamicControlMap = {[key in DynamicControl['controlType']]:Type<any>}
@Injectable({
  providedIn: 'root'
})
export class DynamicComponentResolver {

  controlComponents={
    input:DynamicInputComponent,
    select:DynamicSelectComponent
  }
  public resolve(controlKey:keyof DynamicControlMap)
  {
    return this.controlComponents[controlKey];
  }
  constructor() { }
}