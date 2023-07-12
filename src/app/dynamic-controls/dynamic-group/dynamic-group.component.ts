import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicBaseComponent } from '../dynamic-base/dynamic-base.component';
import { ControlInjectorPipe } from '../control-injector.pipe';
import { DynamicComponentResolver } from '../dynamic-component-resolver.service';

@Component({
  selector: 'app-dynamic-group',
  templateUrl: './dynamic-group.component.html',
  styleUrls: ['./dynamic-group.component.scss'],
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,ControlInjectorPipe,DynamicBaseComponent]
})
export class DynamicGroupComponent extends DynamicBaseComponent {

  constructor(protected dynamicComponentResolver:DynamicComponentResolver){
    super();
  }
}
