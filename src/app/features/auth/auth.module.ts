import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LayoutModule } from '../../layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [CadastroComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, LayoutModule],
})
export class AuthModule {}
