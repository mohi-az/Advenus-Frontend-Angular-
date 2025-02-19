import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AdminCitiesComponent } from './cities.component';
import { By } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { provideMockStore } from '@ngrx/store/testing';
import { ScannedActionsSubject } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

// Test Suite for AdminCitiesComponent
describe('AdminCitiesComponent', () => {
    let component: AdminCitiesComponent;
    let fixture: ComponentFixture<AdminCitiesComponent>;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AdminCitiesComponent],
            providers: [provideMockStore({}),
                { provide: Actions, useValue: new Actions(new ScannedActionsSubject()) }, 
                { provide: ScannedActionsSubject, useValue: new ScannedActionsSubject() }, 
            {provide: 'ToastConfig',useValue: {} },
            {provide: ToastrService,
                useValue: {
                    success: jasmine.createSpy('success'),
                    error: jasmine.createSpy('error'),
                    info: jasmine.createSpy('info'),
                    warning: jasmine.createSpy('warning')
                }
            }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(AdminCitiesComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    // Test: Component should be created
    it('should create the Component', () => {
        expect(component).toBeTruthy();
    });

    // Test: Should render the table
    it('should render the city table', () => {
        const table = debugElement.query(By.css('[data-testid="table"]'));
        expect(table).toBeTruthy();
    });
});
