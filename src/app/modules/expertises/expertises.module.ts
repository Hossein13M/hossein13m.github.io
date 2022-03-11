import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpertisesComponent } from './expertises.component';
import { ExpertisesRoutingModule } from './expertises.routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ExpertiseCardModule } from '../../components/expertise-card/expertise-card.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ExpertisesComponent],
    imports: [
        CommonModule,
        ExpertisesRoutingModule,
        MatTabsModule,
        MatIconModule,
        ExpertiseCardModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
    ],
})
export class ExpertisesModule {}
