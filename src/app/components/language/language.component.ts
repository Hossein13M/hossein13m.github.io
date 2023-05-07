import { Component } from '@angular/core';
import { Languages } from '../../const/languages';
import type { Language, LanguageCode } from '../../models/language.model';
import { TranslocoService } from '@ngneat/transloco';

@Component({
    selector: 'app-language',
    template: ` <div class="flex justify-around items-center mx-20">
        <ng-container *ngFor="let language of languages">
            <button (click)="onLanguageChange(language.languageCode)">
                <img [src]="language.emblemUrl" [alt]="language.name" width="25px" class="mb-2" />
                <span>{{ language.languageCode.toUpperCase() }}</span>
            </button>
        </ng-container>
    </div>`,
})
export class LanguageComponent {
    constructor(private translocoService: TranslocoService) {}

    public languages: Array<Language> = Languages.filter((lang) => lang.emblemUrl);

    public onLanguageChange(langCode: LanguageCode): void {
        this.translocoService.setActiveLang(langCode === 'per' ? 'fa' : langCode);
        // langCode === 'per' ? document.body.setAttribute('dir', 'rtl') : document.body.setAttribute('dir', 'ltr');
    }
}
