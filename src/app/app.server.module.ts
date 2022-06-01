import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppService } from './services/app.service';
import { WindowService } from './services/window.service';

@NgModule({
    imports: [AppModule, ServerModule],
    bootstrap: [AppComponent],
    providers: [{ provide: AppService, useClass: WindowService }],
})
export class AppServerModule {}
