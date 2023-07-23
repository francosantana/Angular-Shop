import { Component } from '@angular/core';

import { SidenavService } from '../sidenav/service/sidenav.service';

import { Store, select } from '@ngrx/store';
import { RootState } from '../auth/models/auth-model';
import { selectUser } from '../auth/state/auth-selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  user$ = this.state.pipe(select(selectUser))

  constructor(private state: Store<RootState>, public sidenav: SidenavService){}

}
