import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { State, select } from '@ngrx/store';
import { RootState } from '../auth/models/auth-model';
import { selectUser } from '../auth/state/auth-selector';
import { switchMap, of , map} from 'rxjs';

export const authGuard = (type: 'denied' | 'required'): CanActivateFn => {
  
  return function () {
    const state = inject(State<RootState>)
    const routerService = inject(Router)

    return state.pipe(select(selectUser), 
    map((user)=>{
      if(user && type == 'denied'){
        return routerService.createUrlTree(['/'])
      }
  
      if(!user && type == 'required'){
        return routerService.createUrlTree(['/auth/login'])
      }

      return true
    }))
  };
}