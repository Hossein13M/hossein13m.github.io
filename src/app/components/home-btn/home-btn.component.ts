import { Component, Input, OnInit } from '@angular/core';
import { HomeMainButtonInfo, homeMainButton, HomeMainButtonType } from 'src/app/const/homeMainButton';

@Component({
    selector: 'app-home-btn',
    template: `
        <button
            class="dark:bg-custom-yellow-500 bg-custom-blue-600 dark:text-custom-purple-500 text-yellow-500 font-semibold m-auto dark:hover:bg-custom-blue-400 dark:hover:text-custom-yellow-500 hover:bg-custom-yellow-500 hover:text-custom-blue-400"
            [class]="buttonType === 'adpList' ? 'adp-btn' : ''"
            disableRipple
            mat-flat-button
        >
            <a class="flex items-center" [href]="buttonInfo.link" target="_blank">
                <img [src]="'../../../assets/images/' + buttonInfo.imageUrl + '.png'" [width]="buttonType === 'adpList' ? 35 : 25" alt="" />
                <span class="ml-1"> {{ buttonInfo.text }} </span>
            </a>
        </button>
    `,
    styles: [
        `
            .adp-btn {
                img {
                    -webkit-filter: invert(100%);
                    filter: invert(100%);
                }
                &:hover {
                    img {
                        filter: none;
                    }
                }
            }
        `,
    ],
})
export class HomeBtnComponent implements OnInit {
    @Input() buttonType!: HomeMainButtonType;

    public buttonInfo!: HomeMainButtonInfo;

    ngOnInit(): void {
        this.buttonInfo = homeMainButton[this.buttonType];
    }
}
