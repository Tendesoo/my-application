import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  password:any;
  cnfrmPassword:any

  constructor() { }

  ngOnInit(): void {
  }
checkPassword(){
this.password = this.password.value
this.cnfrmPassword = this.cnfrmPassword.value
console.log(this.cnfrmPassword,this.password)
}
}
