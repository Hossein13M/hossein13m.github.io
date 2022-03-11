import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertisesComponent } from './expertises.component';
import { ExpertisesRoutingModule } from './expertises.routing.module';

@NgModule({
    declarations: [ExpertisesComponent],
    imports: [CommonModule, ExpertisesRoutingModule],
})
export class ExpertisesModule {}
