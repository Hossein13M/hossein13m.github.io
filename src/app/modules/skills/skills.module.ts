import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillsRoutingModule } from './skills.routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ExpertiseCardModule } from '../../components/expertise-card/expertise-card.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [SkillsComponent],
    imports: [CommonModule, SkillsRoutingModule, MatTabsModule, MatIconModule, ExpertiseCardModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
})
export class SkillsModule {}
