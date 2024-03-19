import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function minDateValidator(minDate: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const date = new Date(control.value);

        if(minDate.getTime() < date.getTime()){
            return null
        } else {
            return {'min' : {value: control.value, expeted: minDate}}
        }
    }
}