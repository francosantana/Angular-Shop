import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './component/sidenav.component';
import { SidenavService } from './service/sidenav.service';

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
  ],
  exports: [SidenavComponent],
  providers: [SidenavService]
})
export class SidenavModule { }
