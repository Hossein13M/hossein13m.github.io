import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { ProgressSpinnerModule } from './components/progress-spinner/progress-spinner.module';
import { InfoSidenavReachMeModule } from './components/info-sidenav-reach-me/info-sidenav-reach-me.module';
import { BaseInfoModule } from './components/base-info/base-info.module';
import { PageHeaderModule } from './components/page-header/page-header.module';
import { LanguageModule } from './components/language/language.module';
import { DirectivesModule } from './directives/directives.module';

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
        MatProgressBarModule,
        MatTooltipModule,
        ProgressSpinnerModule,
        DirectivesModule,
        InfoSidenavReachMeModule,
        BaseInfoModule,
        PageHeaderModule,
        HttpClientModule,
        TranslocoRootModule,
        LanguageModule,
    ],
    providers: [GoogleAnalyticsService],
    bootstrap: [AppComponent],
})
export class AppModule {}
