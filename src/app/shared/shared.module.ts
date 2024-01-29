import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [HomeComponent,
    NavbarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    HomeComponent,
    NavbarComponent]
})
export class SharedModule { }
