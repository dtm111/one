import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  categoryName: string;
  
  constructor(private productsService: ProductsService, private postsService: PostsService) { }

  ngOnInit() {
    // Retrieve products from the API
      this.postsService.getPosts().subscribe(posts => {
        
        this.categoryName = posts[0].name;
        this.productsService.getAllProducts(this.categoryName).subscribe(products => {
        this.products = products.products;
      
      });
    });
    
      
  }
}


