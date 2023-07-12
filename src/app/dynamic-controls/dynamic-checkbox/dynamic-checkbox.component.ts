import { Component, inject } from '@angular/core';
import { DynamicBaseComponent } from '../dynamic-base/dynamic-base.component';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-checkbox',
  templateUrl: './dynamic-checkbox.component.html',
  styleUrls: ['./dynamic-checkbox.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule,DynamicBaseComponent],
  viewProviders:[
    {
      provide:ControlContainer,
      useFactory:()=>{
        const parentContainer = inject(ControlContainer,{skipSelf:true});
        return parentContainer;
      }
    }
  ]
})
export class DynamicCheckboxComponent extends DynamicBaseComponent {

}
