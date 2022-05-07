import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationsComponent } from './publications.component';
import { PublicationsRoutingModule } from './publications.routing.module';
import { PageHeaderModule } from '../../components/page-header/page-header.module';
import { PublicationItemModule } from '../../components/publication-item/publication-item.module';
import { HorizontalCardModule } from '../../components/horizontal-card/horizontal-card.module';

@NgModule({
    declarations: [PublicationsComponent],
    imports: [CommonModule, PublicationsRoutingModule, PageHeaderModule, PublicationItemModule, HorizontalCardModule],
})
export class PublicationsModule {}
