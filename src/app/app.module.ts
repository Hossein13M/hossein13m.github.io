import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressSpinnerModule } from './components/progress-spinner/progress-spinner.module';
import { DirectivesModule } from './directives/directives.module';
import { InfoSidenavReachMeModule } from './components/info-sidenav-reach-me/info-sidenav-reach-me.module';
import { BaseInfoModule } from './components/base-info/base-info.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        ProgressSpinnerModule,
        DirectivesModule,
        InfoSidenavReachMeModule,
        MatDividerModule,
        BaseInfoModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
