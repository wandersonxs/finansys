import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {Interceptor} from './services/interceptor.module';
import {AuthService} from '../shared/services/auth/auth.service';
import {AuthGuard} from '../shared/services/auth/auth-guard.service';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:
    [
      // shared modules
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      // Shared Components
      NavbarComponent,
      RouterModule
    ]
})
export class CoreModule {
}
