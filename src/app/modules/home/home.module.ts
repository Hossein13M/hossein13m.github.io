import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { HomeHeaderModule } from '../../components/home-header/home-header.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, RouterModule, HomeRoutingModule, HomeHeaderModule, MatDividerModule],
    exports: [HomeComponent],
})
export class HomeModule {}
