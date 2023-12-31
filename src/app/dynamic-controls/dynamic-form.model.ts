import { Validators } from "@angular/forms";

export interface DynamicOption<T>{
    label:string;
    value:T;
}
type ValidatorKeys = keyof Omit<typeof Validators,'compose'|'prototype'| 'composeAsync' >;
export interface DynamicControl<T=string>{
    controlType:'input'|'select'|'checkbox'|'group';
    type?:string;
    label:string;
    value:T | null;
    options?: DynamicOption<T>[];
    validators?:{ [key in ValidatorKeys]?:unknown };
    controls?:DynamicFormConfig['controls']
}

export interface DynamicFormConfig{
    description:string;
    controls:{[key: string]:DynamicControl};
}