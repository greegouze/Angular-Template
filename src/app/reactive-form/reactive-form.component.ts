import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { minDateValidator } from '../validators/reactiveFormValidator';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder){}

  //s'actionne à l'initialitation du component
  ngOnInit(): void {
    //J'ajoute un Observable pour mon formGroup
    this.orderForm.valueChanges
    //En subscrivant à celui ci je peux log les changements 
    .subscribe(value => {
      console.log('orderForm value change', value);
      
    })
  }

  orderForm = this.fb.group({
    title: ['', Validators.required],
    quantity: ['',[ Validators.required, Validators.max(5)]],
    date: ['', Validators.required],
    contact: ['', [Validators.required, Validators.email]],
    payments: this.fb.array([])
  })

  onSubmit(): void {
   console.log('formUser',this.orderForm.value);
  }

  addPayment(){
    //Creation d'un nouveau formGroup
    const paymentForm = this.fb.group({
      date: ['', Validators.compose([ //Lorsque l'on a plusieurs règles soit on utilise un [] ou .compose
        Validators.required,
        minDateValidator(new Date())
      ])],
      amount: ['', Validators.required]
    })

    //via get j'accède au control de formulaire orderForm pour  le champs payments
    //problème un objet de type AbstractControl ne possède pas de méthode push 
    const payments = this.orderForm.get('payments') as FormArray //j'indique donc que mon controle et de type FormArray

    payments.push(paymentForm)
  }


  //Utilisation d'un getteur afin de retourner le control "payments avec le typage FormAQrray"
  get payments(): FormArray {

    return this.orderForm.get('payments') as FormArray
  }

}
