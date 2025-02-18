import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      tipoUsuario: ['aluno', Validators.required], // valor padrão 'aluno'
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.cadastroForm.valid) {
      console.log('Dados do cadastro:', this.cadastroForm.value);
      // Aqui você pode enviar os dados para a API/backend
    } else {
      console.log('Formulário inválido');
      // Exibir mensagens de erro conforme necessário
    }
  }
}
