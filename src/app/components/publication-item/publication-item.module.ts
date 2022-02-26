import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationItemComponent } from './publication-item.component';

@NgModule({
    declarations: [PublicationItemComponent],
    imports: [CommonModule],
    exports: [PublicationItemComponent],
})
export class PublicationItemModule {}
