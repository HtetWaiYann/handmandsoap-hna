import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
    product: Product | undefined;

    constructor(private route: ActivatedRoute, private catService: CartService){

    }
    ngOnInit(): void {
      const routeParams = this.route.snapshot.paramMap;
      const productIdFromRoute = Number(routeParams.get('productId'));

      this.product = products.find(product => product.id === productIdFromRoute);

      
      
    }
    addToCart(product: any){
      this.catService.addToCart(product);
      alert("Your product has been added to the cart");
    }
}
