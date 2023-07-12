import { Component, inject } from '@angular/core';
import { DynamicBaseComponent } from '../dynamic-base/dynamic-base.component';
import { CommonModule } from '@angular/common';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.scss'],
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,DynamicBaseComponent],
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
export class DynamicSelectComponent extends DynamicBaseComponent {

}
