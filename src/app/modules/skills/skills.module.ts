import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { SkillsRoutingModule } from './skills.routing.module';

@NgModule({
    declarations: [SkillsComponent],
    imports: [CommonModule, SkillsRoutingModule],
})
export class SkillsModule {}
