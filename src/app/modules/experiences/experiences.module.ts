import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './experiences.component';
import { ExperiencesRoutingModule } from './experiences.routing.module';
import { ExperienceCardModule } from '../../components/experience-card/experience-card.module';
import { CompanyCardModule } from '../../components/company-card/company-card.module';

@NgModule({
    declarations: [ExperiencesComponent],
    imports: [CommonModule, ExperiencesRoutingModule, ExperienceCardModule, CompanyCardModule],
})
export class ExperiencesModule {}
