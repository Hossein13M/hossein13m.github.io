import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationsComponent } from './publications.component';
import { PublicationsRoutingModule } from './publications.routing.module';

@NgModule({
    declarations: [PublicationsComponent],
    imports: [CommonModule, PublicationsRoutingModule],
})
export class PublicationsModule {}
