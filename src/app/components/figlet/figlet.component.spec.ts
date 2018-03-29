import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FigletComponent} from './figlet.component';
import {FigletService} from '../../services/figlet/figlet.service';
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

describe('FigletComponent', () => {
    let component: FigletComponent;
    let fixture: ComponentFixture<FigletComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FigletComponent],
            providers: [FigletService],
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
        fixture = TestBed.createComponent(FigletComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
