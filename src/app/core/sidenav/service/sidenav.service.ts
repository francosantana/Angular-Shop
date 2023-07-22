import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  component: MatSidenav | null = null

  initComponent(_sidenav: MatSidenav){
    this.component = _sidenav
  }

  toggle(){
    if(this.component){
      this.component.toggle()
    } else {
      throw Error('Side Nav component is not initializated')
    }
  }

  constructor() { }
}
