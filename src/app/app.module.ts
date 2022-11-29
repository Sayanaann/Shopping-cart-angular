import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

const myRoute:Routes=[
{
  path:"",
  component:AddProductComponent
},
{
path:"view",
component:ViewproductComponent
}

]



@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewproductComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
