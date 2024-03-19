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