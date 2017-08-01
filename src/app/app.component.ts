import { Component, HostBinding, OnInit } from '@angular/core';
import { MdDialog, OverlayContainer } from '@angular/material';

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

    constructor(public dialog: MdDialog,
                private overlayContainer: OverlayContainer) { }

    ngOnInit() {
        this.overlayContainer.themeClass = `ab-default-theme`;
    }

    changeTheme(t) {
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
export class DialogExampleDialogComponent {}
