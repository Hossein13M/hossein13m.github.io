import { Component } from '@angular/core';
import { SocialMediaModel } from '../../models/social-media.model';
import { SocialMedia } from '../../const/socialMedia';

@Component({
    selector: 'app-info-sidenav-reach-me',
    templateUrl: './info-sidenav-reach-me.component.html',
    styleUrls: ['./info-sidenav-reach-me.component.scss'],
})
export class InfoSidenavReachMeComponent {
    public socialMedia: Array<SocialMediaModel> = SocialMedia;

    constructor() {}
}
