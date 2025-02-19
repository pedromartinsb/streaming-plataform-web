import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Curso {
  id: number;
  titulo: string;
  categoria: string;
  ativo: boolean;
}

@Component({
  selector: 'app-meus-cursos',
  templateUrl: './meus-cursos.component.html',
  styleUrls: ['./meus-cursos.component.scss'],
  standalone: false,
})
export class MeusCursosComponent implements OnInit {
  cursos: Curso[] = [
    {
      id: 1,
      titulo: 'Angular do Zero',
      categoria: 'Desenvolvimento',
      ativo: true,
    },
    {
      id: 2,
      titulo: 'React Avançado',
      categoria: 'Desenvolvimento',
      ativo: false,
    },
    { id: 3, titulo: 'Fotografia Digital', categoria: 'Arte', ativo: true },
  ];

  showModal: boolean = false;

  newCursoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newCursoForm = this.fb.group({
      titulo: ['', Validators.required],
      categoria: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  criarCurso(): void {
    if (this.newCursoForm.valid) {
      const newCurso: Curso = {
        id: this.cursos.length + 1,
        titulo: this.newCursoForm.value.titulo,
        categoria: this.newCursoForm.value.categoria,
        ativo: true,
      };
      this.cursos.push(newCurso);
      this.newCursoForm.reset();
      this.closeModal();
    }
  }
}
