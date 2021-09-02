import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public isDarkTheme: boolean = true;
    @ViewChild('sidenav') sidenav!: MatSidenav;

    public clickHandler(): void {
        this.sidenav.close().finally();
    }

    public changeTheme(): void {
        this.isDarkTheme = !this.isDarkTheme;
    }
}
