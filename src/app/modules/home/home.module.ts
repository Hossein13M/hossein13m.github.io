import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, RouterModule, HomeRoutingModule],
    exports: [HomeComponent],
})
export class HomeModule {}
