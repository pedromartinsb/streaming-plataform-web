import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeusCursosComponent } from './meus-cursos/meus-cursos.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    path: 'meus-cursos',
    component: MeusCursosComponent,
  },
  {
    path: 'detalhes/:id',
    component: CourseDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
