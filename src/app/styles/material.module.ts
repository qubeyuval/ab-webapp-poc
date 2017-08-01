import { NgModule } from '@angular/core';
import {
    MdCoreModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdIconModule,
    MdButtonToggleModule,
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    MdDialogModule
} from '@angular/material';

const modules = [
    MdCoreModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdIconModule,
    MdButtonToggleModule,
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    MdDialogModule
];

@NgModule({
    imports: modules,
    exports: modules,
})
export class ABMaterialModule { }
