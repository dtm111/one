import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//import { ButtonsModule } from 'ng2-bootstrap/buttons';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsComponent } from './products/products.component';

import { PostsService } from './posts.service';
import { ProductsService } from './products.service';

// Define the routes
const ROUTES = [
 // {
   // path: '',
    //redirectTo: 'posts',
    //pathMatch: 'full'
  //},
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES), // Add routes to the app
    //ButtonsModule
  ],
  providers: [PostsService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
