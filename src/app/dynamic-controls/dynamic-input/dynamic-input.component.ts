import { Component, inject } from '@angular/core';
import { DynamicBaseComponent } from '../dynamic-base/dynamic-base.component';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule,DynamicBaseComponent],
  viewProviders:[
    {
      provide:ControlContainer,
      useFactory:()=>{
        const parentContainer = inject(ControlContainer,{skipSelf:true});
        return parentContainer
      }
    }
  ]
})
export class DynamicInputComponent  extends DynamicBaseComponent{
  // inject automatically infers type from injection token
  
}
