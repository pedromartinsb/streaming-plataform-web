import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Curso {
  id: number;
  titulo: string;
  descricao: string;
  videoUrl: string;
  categoria: string;
  conteudo: string[];
}

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  standalone: false,
})
export class CourseDetailsComponent implements OnInit {
  curso: Curso | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // Simulação: substitua essa parte pela chamada de serviço para buscar os dados reais
    this.curso = {
      id: Number(id),
      titulo: `Curso Exemplo ${id}`,
      descricao:
        'Esta é uma descrição detalhada do curso, onde você aprende conceitos essenciais e avançados.',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      categoria: 'Desenvolvimento',
      conteudo: [
        'Módulo 1: Introdução',
        'Módulo 2: Conceitos Avançados',
        'Módulo 3: Projeto Prático',
      ],
    };
  }
}
