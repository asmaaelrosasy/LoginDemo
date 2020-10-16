import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AdminComponent } from './components/admin/admin.component';



@NgModule({
  declarations: [NavBarComponent, AdminComponent],
  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
