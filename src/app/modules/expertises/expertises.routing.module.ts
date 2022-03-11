import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertisesComponent } from './expertises.component';

const routes: Routes = [{ path: '', component: ExpertisesComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExpertisesRoutingModule {}
