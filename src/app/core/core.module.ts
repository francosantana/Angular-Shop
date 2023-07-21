import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/service/auth.service';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './auth/state/auth-reducer';
import { AuthEffects } from './auth/state/auth-effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({auth: authReducer}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AuthEffects]),
  ],
  exports: [
    HttpClientModule,
    StoreModule,
    StoreDevtoolsModule,
    EffectsModule
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule { }
