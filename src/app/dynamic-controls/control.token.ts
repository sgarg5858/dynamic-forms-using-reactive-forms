import { InjectionToken } from "@angular/core";
import { DynamicControl } from "./dynamic-form.model";

export interface ControlData{
    controlKey:string;
    config:DynamicControl
}

export const CONTROL_DATA = new InjectionToken<ControlData>('CONTROL_DATA');