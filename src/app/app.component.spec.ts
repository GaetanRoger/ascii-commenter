import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {ParametersInputComponent} from './components/parameters-input/parameters-input.component';
import {FigletComponent} from './components/figlet/figlet.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                BrowserAnimationsModule,
                MatSelectModule,
                MatInputModule,
                MatCardModule,
                MatButtonModule
            ],
            declarations: [
                AppComponent,
                ParametersInputComponent,
                FigletComponent
            ],
            providers: []
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
