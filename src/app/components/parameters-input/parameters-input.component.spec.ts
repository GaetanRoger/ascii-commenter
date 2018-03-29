import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ParametersInputComponent} from './parameters-input.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

describe('ParametersInputComponent', () => {
    let component: ParametersInputComponent;
    let fixture: ComponentFixture<ParametersInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ParametersInputComponent],
            imports: [
                FormsModule,
                BrowserAnimationsModule,
                MatSelectModule,
                MatInputModule,
                MatCardModule,
                MatButtonModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ParametersInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
