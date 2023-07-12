import { Component, inject } from '@angular/core';
import { CONTROL_DATA } from '../control.token';

@Component({
  selector: 'app-dynamic-base',
  template:"",
  styles:[],
  standalone:true
})
export class DynamicBaseComponent {
  control = inject(CONTROL_DATA);
}
