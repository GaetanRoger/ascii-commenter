import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FigletComponent} from './components/figlet/figlet.component';
import {FormsModule} from '@angular/forms';
import {ParametersInputComponent} from './components/parameters-input/parameters-input.component';
import {ClipboardModule} from 'ngx-clipboard';


@NgModule({
    declarations: [
        AppComponent,
        FigletComponent,
        ParametersInputComponent
    ],
    imports: [
        BrowserModule,
        ClipboardModule,
        FormsModule,
        BrowserAnimationsModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
