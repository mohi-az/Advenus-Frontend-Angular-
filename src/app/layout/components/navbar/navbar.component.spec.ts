import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';

// Test Suite for Navbar Component
describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavbarComponent],
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
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    // Test: Component should be created
    it('should create the Component', () => {
        expect(component).toBeTruthy();
    });

    // Test: Should render the full menu
    it('should render the menu', () => {
        const menuFull = debugElement.query(By.css('[data-testid="menuFull"]'));
        expect(menuFull).toBeTruthy();
    });
    // Test: Should render the responsive burger Menu
    it('should render the responsive burger Menu', () => {
        const burgerMenu = debugElement.query(By.css('[data-testid="burgerMenu"]'));
        expect(burgerMenu).toBeTruthy();
    });
    // Test: Should render the contact section
    it('should render the contact section', () => {
        const contact = debugElement.query(By.css('[data-testid="contact"]'));
        expect(contact).toBeTruthy();
    });
    // Test: Should render the social
    it('should render the social', () => {
        const social = debugElement.query(By.css('[data-testid="social"]'));
        expect(social).toBeTruthy();
    });
});
