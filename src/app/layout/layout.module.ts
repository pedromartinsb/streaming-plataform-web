import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [RouterModule, CommonModule],
  exports: [HeaderComponent, FooterComponent, SidebarComponent],
})
export class LayoutModule {}
