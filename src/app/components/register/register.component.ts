import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 reactiveForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) { 

    this.reactiveForm=this.formBuilder.group({
      username:new FormControl('',Validators.compose([Validators.required,Validators.minLength(6)])),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      cnfrmPassword:new FormControl('',[Validators.required])
    })
  }

  get f (){return this.reactiveForm.controls}

  onSubmit(){
    if(this.reactiveForm.invalid){
      return;
    }
  }

  ngOnInit(): void {
  }

}
