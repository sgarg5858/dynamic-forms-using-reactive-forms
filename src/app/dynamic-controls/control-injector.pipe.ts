import { Injector, Pipe, PipeTransform, inject } from '@angular/core';
import { DynamicControl } from './dynamic-form.model';
import { CONTROL_DATA } from './control.token';

@Pipe({
  name: 'controlInjector'
  ,standalone:true
})
export class ControlInjectorPipe implements PipeTransform {

   parentInjector = inject(Injector);

  //By default injector for below is Null Injector
  transform(controlKey:string, config: DynamicControl): Injector {

    return Injector.create({
      parent:this.parentInjector,
      providers:[
        {
          provide:CONTROL_DATA,
          useValue:{controlKey,config}
        }
      ]
    });

  }

}
