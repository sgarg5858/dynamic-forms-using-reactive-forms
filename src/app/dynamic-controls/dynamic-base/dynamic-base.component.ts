import { Component, inject } from '@angular/core';
import { CONTROL_DATA } from '../control.token';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-base',
  template:"",
  styles:[],
  standalone:true,
  
})
export class DynamicBaseComponent {
  control = inject(CONTROL_DATA);
  
}
