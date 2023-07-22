import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// State managment
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth/state/auth-reducer';
import { AuthEffects } from './auth/state/auth-effects';

// App Components/Services
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth/service/auth.service';

// Styles Components (MUI)
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({auth: authReducer}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AuthEffects]),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [
    HttpClientModule,
    StoreModule,
    StoreDevtoolsModule,
    EffectsModule,
    NavbarComponent
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule { }
