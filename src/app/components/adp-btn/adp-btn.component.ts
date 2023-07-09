import { Component } from '@angular/core';

@Component({
    selector: 'app-adp-btn',
    template: `
        <button
            class="adp-btn dark:bg-custom-yellow-500 bg-custom-blue-600 dark:text-custom-purple-500 text-yellow-500 font-semibold m-auto dark:hover:bg-custom-blue-400 dark:hover:text-custom-yellow-500 hover:bg-custom-yellow-500 hover:text-custom-blue-400"
            disableRipple
            mat-flat-button
        >
            <a class="flex items-center" href="https://adplist.org/mentors/hossein-mousavi" target="_blank">
                <img src="/assets/images/adplist.png" width="35px" alt="" />
                <span> Book A Free Session With Me </span>
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
export class AdpBtnComponent {}
