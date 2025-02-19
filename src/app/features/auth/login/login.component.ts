import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Dados do login:', this.loginForm.value);
      // Aqui você pode implementar a chamada para o serviço de autenticação
      // Simulação de login: salve o token
      localStorage.setItem('userToken', 'seu-token-aqui');
      // Redirecione para a Home
      this.router.navigate(['/home']);
    } else {
      console.log('Formulário inválido');
    }
  }
}
