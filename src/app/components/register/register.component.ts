import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { urlValidator } from 'src/app/validators/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  reactiveForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      email: new FormControl('', [Validators.email]),
      url : new FormControl('', [urlValidator]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
      cnfrmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    }, {
      validators: this.Mustmatch('password', 'cnfrmPassword')
    })
  }
  get f() { return this.reactiveForm.controls }
  Mustmatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ Mustmatch: true }
        );
      }
      else {
        matchingControl.setErrors(null);
      }
    }
  }

  onSubmit() {
    if (this.reactiveForm.invalid) {
      return;
    }
  }



}
