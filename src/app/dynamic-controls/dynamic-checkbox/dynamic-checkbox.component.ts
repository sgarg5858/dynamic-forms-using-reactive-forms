import { Component } from '@angular/core';
import { DynamicBaseComponent } from '../dynamic-base/dynamic-base.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-checkbox',
  templateUrl: './dynamic-checkbox.component.html',
  styleUrls: ['./dynamic-checkbox.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule]
})
export class DynamicCheckboxComponent extends DynamicBaseComponent {

}
