import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder,Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/services/api.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
productForm!:FormGroup;
  constructor(private formBuilder:FormBuilder , private http: HttpClient , private api: ApiService , private dialogRef:MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      itemName:['', Validators.required],
      price:['', Validators.required],
    })
  }

  public addItem(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Product added successfully")
          this.productForm.reset();
          this.dialogRef.close('save')
        },
        error:()=> {
          alert("Error while adding the product")
        }
      })
    }
    }
  

}
