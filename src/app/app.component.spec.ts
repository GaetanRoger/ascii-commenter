import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ParametersInputComponent} from './components/parameters-input/parameters-input.component';
import {FigletComponent} from './components/figlet/figlet.component';
import {ClipboardModule, ClipboardService} from 'ngx-clipboard';
import {HeaderComponent} from './components/header/header.component';
import {BottomInfoComponent} from './components/bottom-info/bottom-info.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
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
            declarations: [
                AppComponent,
                ParametersInputComponent,
                FigletComponent,
                HeaderComponent,
                BottomInfoComponent
            ],
            providers: [ClipboardService]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
