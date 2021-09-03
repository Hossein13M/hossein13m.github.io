import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public isDarkTheme: boolean = true;
    @ViewChild('sidenav') sidenav!: MatSidenav;

    public clickHandler(): void {
        this.sidenav.close().finally();
    }

    ngOnInit(): void {
        this.isDarkTheme = localStorage.getItem('theme') === 'dark';
    }

    public changeTheme(): void {
        this.isDarkTheme = !this.isDarkTheme;
        localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    }
}
