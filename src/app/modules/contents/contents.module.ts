import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentsComponent } from './contents.component';
import { ContentsRoutingModule } from './contents.routing.module';
import { PageHeaderModule } from '../../components/page-header/page-header.module';
import { PublicationItemModule } from '../../components/publication-item/publication-item.module';
import { HorizontalCardModule } from '../../components/horizontal-card/horizontal-card.module';

@NgModule({
    declarations: [ContentsComponent],
    imports: [CommonModule, ContentsRoutingModule, PageHeaderModule, PublicationItemModule, HorizontalCardModule],
})
export class ContentsModule {}
