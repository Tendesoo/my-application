import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Item } from 'src/app/models/items';
import{MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from 'src/app/services/services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  price: number;
  itemName: string;
}

@Component({
  selector: 'app-display-inventory',
  templateUrl: './display-inventory.component.html',
  styleUrls: ['./display-inventory.component.scss']
})
export class DisplayInventoryComponent implements OnInit {

  items: Item[] = []

  readonly ROOT_URL = 'https://62612d40f429c20deb9c1471.mockapi.io/inventory'

  displayedColumns: string[] = ['itemName', 'price'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private http: HttpClient ,private dialog:MatDialog ,  private api: ApiService ) {}
  openDialog(){
    this.dialog.open(DialogComponent,{
     width: '30%'
    });
  }

  ngOnInit():void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        this.dataSource = res
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
        console.log(res)
      },
      error:(err)=>{
        alert("Error while fetching the Records")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



