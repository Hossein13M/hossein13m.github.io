import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { AboutMeComponent } from './about-me.component';
import { AboutMeRoutingModule } from './about-me.routing.module';
import { DividerModule } from '../../components/divider/divider.module';

@NgModule({
    declarations: [AboutMeComponent],
    imports: [CommonModule, AboutMeRoutingModule, MatCardModule, MatDividerModule, DividerModule],
})
export class AboutMeModule {}
