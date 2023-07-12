import { Component, inject } from '@angular/core';
import { CONTROL_DATA } from '../control.token';
import { DynamicBaseComponent } from '../dynamic-base/dynamic-base.component';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
  standalone:true
})
export class DynamicInputComponent  extends DynamicBaseComponent{
  // inject automatically infers type from injection token
  
}
