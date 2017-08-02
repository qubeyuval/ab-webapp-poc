import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { ABMaterialModule } from './styles/material.module';
// import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent, DialogExampleDialogComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OptimizelyService } from './optimizely.service';

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
        HttpModule,
        // MaterialModule,
        ABMaterialModule,
        BrowserAnimationsModule
    ],
    providers: [OptimizelyService],
    bootstrap: [AppComponent]
})
export class AppModule { }
