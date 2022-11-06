import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InfoSidenavReachMeComponent } from './info-sidenav-reach-me.component';

@NgModule({
    declarations: [InfoSidenavReachMeComponent],
    imports: [CommonModule, MatTooltipModule],
    exports: [InfoSidenavReachMeComponent],
})
export class InfoSidenavReachMeModule {}
