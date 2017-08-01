import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { ABMaterialModule } from './styles/material.module';
// import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent, DialogExampleDialogComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        DialogExampleDialogComponent,
        HeaderComponent
    ],
    entryComponents: [
        DialogExampleDialogComponent
    ],
    imports: [
        BrowserModule,
        // MaterialModule,
        ABMaterialModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
