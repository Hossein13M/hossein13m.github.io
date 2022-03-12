import { Component, Input, OnInit } from '@angular/core';
import { ContactTypes, SocialMediaHeader, SocialMediaModel } from '../../models/social-media.model';
import { SocialMedia, SocialMediaHeaders } from '../../const/socialMedia';

@Component({
    selector: 'app-contact-link',
    templateUrl: './contact-link.component.html',
    styleUrls: ['./contact-link.component.scss'],
})
export class ContactLinkComponent implements OnInit {
    @Input() contactLinkType!: ContactTypes;
    public socialMedias: Array<SocialMediaModel> = [];
    public header!: SocialMediaHeader;

    constructor() {}

    ngOnInit(): void {
        this.getComponentInfoBasedOnType();
    }

    private getComponentInfoBasedOnType(): void {
        SocialMedia.map((socialMedia) => socialMedia.type === this.contactLinkType && this.socialMedias.push(socialMedia));
        this.header = SocialMediaHeaders.find((socialMediaHeader) => socialMediaHeader.type === this.contactLinkType)!;
    }
}
