import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function isRequiredValidator() : ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const isValid = control.value.title != '' || control.value.id != '';

        if(isValid){
            return null
        } else {
            return {isRequired: true}
        }
    
    }
}

export function rangeDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const currentDate = new Date(control.value) 
        const minDate = new Date('1900-01-01').getFullYear();
        const maxDate = new Date('2022-12-31').getFullYear();

        if(currentDate.getFullYear() < minDate || currentDate.getFullYear() > maxDate){
            return {'min': `L'année doit être comprise entre ${minDate} et ${maxDate}`};        } else {
            return null
        }
    }
}