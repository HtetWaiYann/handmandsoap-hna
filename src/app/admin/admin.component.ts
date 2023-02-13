import { Component } from '@angular/core';
import { products, Product } from '../products';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  hide = true;
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;
  products: any = products;
  dataSource = new MatTableDataSource<Product>(this.products);
// displayedColumns: Iterable<string> | undefined;
  loginPage(): any{
    if(this.username === 'admin' && this.password === '12345'){
      this.isLoggedIn = true;
    }else{
      alert("You can't enter, wrong username and password!")
    }
  }
}
