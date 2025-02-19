import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { MeusCursosComponent } from './meus-cursos/meus-cursos.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { CoursesComponent } from './courses/courses.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  declarations: [CoursesComponent, MeusCursosComponent, CourseDetailsComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
})
export class CoursesModule {}
