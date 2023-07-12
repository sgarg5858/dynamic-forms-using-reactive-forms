import { Injectable, Type } from '@angular/core';
import { DynamicControl } from './dynamic-form.model';
import { Observable, from, of } from 'rxjs';


type DynamicControlMap = {[key in DynamicControl['controlType']]: Promise< Type<any> >};

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentResolver {

  lazyControlComponents={
    input: import('./dynamic-input/dynamic-input.component').then(c=>c.DynamicInputComponent),
    select:import('./dynamic-select/dynamic-select.component').then(c=>c.DynamicSelectComponent),
    checkbox: import('./dynamic-checkbox/dynamic-checkbox.component').then(c=>c.DynamicCheckboxComponent),
    group: import('./dynamic-group/dynamic-group.component').then(c=>c.DynamicGroupComponent)
  }
  loadedComponents=new Map<string,Type<any>>();
  public resolve(controlKey:keyof DynamicControlMap):Promise<Type<any>>
  {
    return this.lazyControlComponents[controlKey];
  }
  constructor() { }
}
