import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Languages } from './const/languages';
import { ProgressSpinner } from './components/progress-spinner/progress-spinner.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public isDarkTheme: boolean = true;
    public languagesList: Array<ProgressSpinner> = [];
    @ViewChild('sidenav') sidenav!: MatSidenav;

    public clickHandler(): void {
        this.sidenav.close().finally();
    }

    ngOnInit(): void {
        this.isDarkTheme = localStorage.getItem('theme') === 'dark';
        this.prepareLanguageListForSpinner();
    }

    public changeTheme(): void {
        this.isDarkTheme = !this.isDarkTheme;
        localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    }

    private prepareLanguageListForSpinner(): void {
        Languages.map((language) => {
            this.languagesList.push({
                tailwindsClass: 'text-red-500',
                progressValue: language.proficiencyPercent,
                insideText: language.proficiencyWithinText,
                labelText: language.name,
                bottomMargin: '35px',
                spinnerDiameter: 50,
            });
        });
    }
}
