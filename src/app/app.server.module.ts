import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppService } from './services/app.service';
import { WindowService } from './services/window.service';
import { AppInitService } from './services/app-init.service';

export function initializeApp(appInitService: AppInitService) {
    return (): Promise<any> => {
        return appInitService.Init();
    };
}

@NgModule({
    imports: [AppModule, ServerModule],
    bootstrap: [AppComponent],
    providers: [
        { provide: AppService, useClass: WindowService },
        { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppInitService], multi: true },
    ],
})
export class AppServerModule {}
