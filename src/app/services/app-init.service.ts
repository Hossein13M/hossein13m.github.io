import { Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoadingSpinnerComponent } from '../components/loading-spinner/loading-spinner.component';

@Injectable({ providedIn: 'root' })
export class AppInitService {
    private overlayRef?: OverlayRef;
    public isLoading = new Subject<boolean>();
    constructor(private overlay: Overlay) {}

    Init() {
        return new Promise<void>((resolve, reject) => {
            this.overlayRef = this.overlay.create({
                panelClass: ['bg-custom-purple-500', 'w-full', 'h-full', 'flex', 'justify-center'],
                hasBackdrop: true,
            });
            this.overlayRef.attach(new ComponentPortal(LoadingSpinnerComponent));
            setTimeout(() => {
                this.overlayRef?.detach();
                resolve();
            }, 3000);
        });
    }
}
