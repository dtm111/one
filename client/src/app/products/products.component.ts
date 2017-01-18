import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    // Retrieve products from the API
      this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

}


