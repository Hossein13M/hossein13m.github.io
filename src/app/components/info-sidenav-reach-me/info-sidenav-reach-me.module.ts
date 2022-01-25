import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSidenavReachMeComponent } from './info-sidenav-reach-me.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [InfoSidenavReachMeComponent],
    imports: [CommonModule, MatTooltipModule],
    exports: [InfoSidenavReachMeComponent],
})
export class InfoSidenavReachMeModule {}
