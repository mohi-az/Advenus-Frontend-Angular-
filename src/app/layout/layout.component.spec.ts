import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

// Test Suite for LayoutComponent
describe('LayoutComponent', () => {
    let component: LayoutComponent;
    let fixture: ComponentFixture<LayoutComponent>;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LayoutComponent],
            providers: [provideMockStore({}),
            {
                provide: 'auth0.client',
                useValue: {
                    user$: of({ name: 'Test User', email: 'test@ottonova.com' }),
                    logout: jasmine.createSpy('logout')
                }
            },
            {
                provide: AuthService,
                useValue: {
                    user$: of({ name: 'Test User', email: 'test@ottonova.com' }),
                    logout: jasmine.createSpy('logout')
                }
            }, {
                provide: ActivatedRoute,
                useValue: {
                    snapshot: {
                        paramMap: {
                            get: (key: string) => 'test-param'
                        }
                    }
                }
            },
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
        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    // Test: Component should be created
    it('should create the Component', () => {
        expect(component).toBeTruthy();
    });

    // Test: Should render the navbar
    it('should render the navbar', () => {
        const navbar = debugElement.query(By.css('[data-testid="navbar"]'));
        expect(navbar).toBeTruthy();
    });
    // Test: Should render the outlet
    it('should render the outlet', () => {
        const outlet = debugElement.query(By.css('[data-testid="outlet"]'));
        expect(outlet).toBeTruthy();
    });
    // Test: Should render the brands
    it('should render the footer', () => {
        const footer = debugElement.query(By.css('[data-testid="footer"]'));
        expect(footer).toBeTruthy();
    });
});
