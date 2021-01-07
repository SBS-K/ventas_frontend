
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
      HeaderComponent,
      FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
