import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { AdminLayoutComponent } from './adminLayout.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { ActivatedRoute } from '@angular/router';

// Test Suite for AdminLayoutComponent
describe('AdminLayoutComponent', () => {
    let component: AdminLayoutComponent;
    let fixture: ComponentFixture<AdminLayoutComponent>;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AdminLayoutComponent],
            providers: [
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
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AdminLayoutComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    // Test: Component should be created
    it('should create the LayoutComponent', () => {
        expect(component).toBeTruthy();
    });

    // Test: Should render sidebar and header
    it('should render sidebar and header', () => {
        const sidebar = debugElement.query(By.css('[data-testid="sidebar"]'));
        const header = debugElement.query(By.css('[data-testid="header"]'));
        expect(sidebar).toBeTruthy();
        expect(header).toBeTruthy();
    });
});
