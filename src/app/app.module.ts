import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { FigletComponent } from './components/figlet/figlet.component';
import { BottomInfoComponent } from './components/bottom-info/bottom-info.component';
import { HeaderComponent } from './components/header/header.component';
import { ParametersInputComponent } from './components/parameters-input/parameters-input.component';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    ClipboardModule,
    FormsModule,
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
export class AppModule { }
