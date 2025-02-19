import { Component, OnInit } from '@angular/core';

interface Curso {
  id: number;
  titulo: string;
  descricao: string;
  thumbnail: string;
  categoria: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  standalone: false,
})
export class CoursesComponent implements OnInit {
  cursos: Curso[] = [
    {
      id: 1,
      titulo: 'Angular do Zero',
      descricao:
        'Aprenda os fundamentos do Angular e crie aplicações modernas.',
      thumbnail: 'https://via.placeholder.com/300x200?text=Angular+do+Zero',
      categoria: 'Desenvolvimento',
    },
    {
      id: 2,
      titulo: 'React Avançado',
      descricao:
        'Aprofunde seus conhecimentos em React com técnicas avançadas.',
      thumbnail: 'https://via.placeholder.com/300x200?text=React+Avancado',
      categoria: 'Desenvolvimento',
    },
    {
      id: 3,
      titulo: 'Vue para Iniciantes',
      descricao:
        'Introdução ao Vue.js e desenvolvimento de aplicações interativas.',
      thumbnail: 'https://via.placeholder.com/300x200?text=Vue+para+Iniciantes',
      categoria: 'Desenvolvimento',
    },
    {
      id: 4,
      titulo: 'Fotografia Digital',
      descricao: 'Aprenda as técnicas básicas de fotografia digital.',
      thumbnail: 'https://via.placeholder.com/300x200?text=Fotografia+Digital',
      categoria: 'Arte',
    },
    {
      id: 5,
      titulo: 'Pintura a Óleo',
      descricao: 'Explore técnicas de pintura a óleo com nossos especialistas.',
      thumbnail: 'https://via.placeholder.com/300x200?text=Pintura+a+Óleo',
      categoria: 'Arte',
    },
  ];

  categorias: string[] = ['Todas', 'Desenvolvimento', 'Arte'];
  selectedCategoria: string = 'Todas';

  constructor() {}

  ngOnInit(): void {}

  get cursosFiltrados(): Curso[] {
    if (this.selectedCategoria === 'Todas') {
      return this.cursos;
    } else {
      return this.cursos.filter(
        (curso) => curso.categoria === this.selectedCategoria
      );
    }
  }

  onCategoriaChange(event: any): void {
    this.selectedCategoria = event.target.value;
  }
}
