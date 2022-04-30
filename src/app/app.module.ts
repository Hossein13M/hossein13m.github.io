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
import { PageHeaderModule } from './components/page-header/page-header.module';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        AppRoutingModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatDividerModule,
        ProgressSpinnerModule,
        DirectivesModule,
        InfoSidenavReachMeModule,
        BaseInfoModule,
        PageHeaderModule,
        MatProgressBarModule,
        MatTooltipModule,
    ],
    providers: [GoogleAnalyticsService],
    bootstrap: [AppComponent],
})
export class AppModule {}
