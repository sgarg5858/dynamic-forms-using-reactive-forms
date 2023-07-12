import { Component } from '@angular/core';
import { DynamicBaseComponent } from '../dynamic-base/dynamic-base.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule]
})
export class DynamicInputComponent  extends DynamicBaseComponent{
  // inject automatically infers type from injection token
  
}
