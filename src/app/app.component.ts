import * as optimizelyClientSdk from 'optimizely-client-sdk';
import { Component, HostBinding, OnInit } from '@angular/core';
import { MdDialog, OverlayContainer } from '@angular/material';

import { OptimizelyService } from './optimizely.service';

const datafile = 'https://cdn.optimizely.com/json/8515982908.json';

const userId = 'user-' + Date.now();

@Component({
    selector: 'ab-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    theme = '';
    @HostBinding('class.ab-default-theme') default = true;
    @HostBinding('class.ab-dark-theme') dark = false;
    @HostBinding('class.ab-green-theme') green = false;
    title = 'app';

    optimizely: any;

    constructor(public dialog: MdDialog,
        private overlayContainer: OverlayContainer,
        private opSrv: OptimizelyService) { }

    ngOnInit() {
        console.log(userId);

        this.overlayContainer.themeClass = `ab-default-theme`;

        this.opSrv.getInstance().subscribe(op => {
            this.optimizely = op;

            const variation = this.optimizely.activate('poc_exp1', userId);
            console.log('variation:', variation);

            this.setTheme(variation);
        });
    }

    changeTheme(t) {
        this.optimizely.track('switch_theme', userId);
        this.setTheme(t);
    }
    private setTheme(t) {
        this.theme = t;

        this.default = this.theme === 'default';
        this.dark = this.theme === 'dark';
        this.green = this.theme === 'green';

        this.overlayContainer.themeClass = `ab-${t}-theme`;
    }
    openDialog() {
        this.dialog.open(DialogExampleDialogComponent);


    }
}

@Component({
    selector: 'ab-dialog',
    template: `<h1>Hi Dialog</h1>`
})
export class DialogExampleDialogComponent { }
