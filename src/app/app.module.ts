import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HomeComponent } from './componet/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ViewComponent } from './component/view/view.component';
import { AddProductComponent } from './viev/add-product/add-product.component';
import { UpdateProductComponent } from './viev/update-product/update-product.component';
import { UpdateUserComponent } from './viev/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ViewComponent,
    AddProductComponent,
    UpdateProductComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
