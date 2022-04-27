import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects.routing.module';

@NgModule({
    declarations: [ProjectsComponent],
    imports: [CommonModule, ProjectsRoutingModule],
})
export class ProjectsModule {}
