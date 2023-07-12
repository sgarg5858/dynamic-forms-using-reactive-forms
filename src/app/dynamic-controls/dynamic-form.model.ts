export interface DynamicOption<T>{
    label:string;
    value:T;
}

export interface DynamicControl<T=string>{
    controlType:'input'|'select';
    type?:string;
    label:string;
    value:T | null;
    options?: DynamicOption<T>[];
    validators?:{ [key:string]:unknown }
}

export interface DynamicFormConfig{
    description:string;
    controls:{[key: string]:DynamicControl};
}