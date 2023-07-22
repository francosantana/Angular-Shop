import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from '../service/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
})

export class SidenavComponent {

  // Init Sidenav component
  @ViewChild(MatSidenav)
  set sidenav(component: MatSidenav){
    this.service.initComponent(component)
  }

  constructor(private service: SidenavService){}

}
