import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{RouterModule,Routes} from '@angular/router'; 
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import{NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import{AngularFireAuthModule} from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './logout/logout.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { AuthGuard } from './auth-guard.service';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import {ProductService} from './product.service';
import {CustomFormsModule} from 'ng2-validation';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ShoppingCartService } from './shopping-cart.service';
//  import {DataTableModule} from 'angular-4-data-table';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    ShoppingCartComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    MyOrdersComponent,
    LoginComponent,
    NavbarComponent,
    LogoutComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    ProductFormComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    CustomFormsModule,    
     AngularFireModule.initializeApp(environment.firebase),
     AngularFireDatabaseModule,
     AngularFireAuthModule,
  FormsModule, 
  ReactiveFormsModule,
NgbModule.forRoot(),
RouterModule.forRoot([
  {path:'', component:ProductsComponent},

{path:'cart', component:CartComponent},
{path:'shopping-cart', component:ShoppingCartComponent},
{path:'login',component:LoginComponent},

{path:'my/orders', component:MyOrdersComponent},
{path:'check-out',component:CheckOutComponent},
{path:'order-success',component:OrderSuccessComponent},

{
  path:'admin/products',
  component:AdminProductsComponent
},

{
  path:'admin/products/new',
  component:ProductFormComponent  
},

{
  path:'admin/products/:id',
  component:ProductFormComponent  
},

{
  path:'admin/orders',
  component:AdminOrdersComponent
}

])
],
  providers: [ProductService,AuthService,AuthGuard,AdminAuthGuard,CategoryService,ShoppingCartService],

  bootstrap: [AppComponent]
})


export class AppModule { }



