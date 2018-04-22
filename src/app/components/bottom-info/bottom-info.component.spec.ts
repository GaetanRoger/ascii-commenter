import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BottomInfoComponent} from './bottom-info.component';
import {MatToolbarModule} from '@angular/material';

describe('BottomInfoComponent', () => {
    let component: BottomInfoComponent;
    let fixture: ComponentFixture<BottomInfoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatToolbarModule
            ],
            declarations: [BottomInfoComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BottomInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
