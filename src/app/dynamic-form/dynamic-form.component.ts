import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {

  constructor(private httpClient:HttpClient){}

  protected formLoadingTrigger = new Subject<'user'|'company'>();
  formConfig$:Observable<Object> = this.formLoadingTrigger.pipe(
    switchMap((config)=> this.httpClient.get(`/assets/${config}.form.json`) )
  )
}
