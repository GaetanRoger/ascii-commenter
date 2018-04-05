import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import {FigletComponent} from './components/figlet/figlet.component';
import {FormsModule} from '@angular/forms';
import {ParametersInputComponent} from './components/parameters-input/parameters-input.component';
import {ClipboardModule} from 'ngx-clipboard';
import {HeaderComponent} from './components/header/header.component';
import { BottomInfoComponent } from './components/bottom-info/bottom-info.component';


@NgModule({
    declarations: [
        AppComponent,
        FigletComponent,
        ParametersInputComponent,
        HeaderComponent,
        BottomInfoComponent
    ],
    imports: [
        BrowserModule,
        ClipboardModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
