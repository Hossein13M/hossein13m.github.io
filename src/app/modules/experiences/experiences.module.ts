import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './experiences.component';
import { ExperiencesRoutingModule } from './experiences.routing.module';

@NgModule({
    declarations: [ExperiencesComponent],
    imports: [CommonModule, ExperiencesRoutingModule],
})
export class ExperiencesModule {}
