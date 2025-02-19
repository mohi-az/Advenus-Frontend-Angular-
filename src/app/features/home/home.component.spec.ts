import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { ScannedActionsSubject } from '@ngrx/store';

// Test Suite for HomeComponent
describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HomeComponent],
            providers: [provideMockStore({}),
                 { provide: Actions, useValue: new Actions(new ScannedActionsSubject()) }, 
                                { provide: ScannedActionsSubject, useValue: new ScannedActionsSubject() }, 
            {
                provide: ActivatedRoute,
                useValue: {
                    snapshot: {
                        paramMap: {
                            get: (key: string) => 'test-param'
                        }
                    }
                }
            }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    // Test: Component should be created
    it('should create the Component', () => {
        expect(component).toBeTruthy();
    });

    // Test: Should render the categories
    it('should render the categories', () => {
        const categories = debugElement.query(By.css('[data-testid="categories"]'));
        expect(categories).toBeTruthy();
    });
    // Test: Should render the intro
    it('should render the intro', () => {
        const intro = debugElement.query(By.css('[data-testid="intro"]'));
        expect(intro).toBeTruthy();
    });
    // Test: Should render the brands
    it('should render the brands', () => {
        const brands = debugElement.query(By.css('[data-testid="brands"]'));
        expect(brands).toBeTruthy();
    });
});
