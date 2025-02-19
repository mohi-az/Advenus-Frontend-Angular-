import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Footer } from './footer.component';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { ActivatedRoute } from '@angular/router';

// Test Suite for Footer
describe('Footer', () => {
    let component: Footer;
    let fixture: ComponentFixture<Footer>;
    let debugElement: DebugElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Footer],
            providers: [provideMockStore({}),
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
        fixture = TestBed.createComponent(Footer);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
    });

    // Test: Component should be created
    it('should create the Component', () => {
        expect(component).toBeTruthy();
    });

    // Test: Should render the menu
    it('should render the menu', () => {
        const menu = debugElement.query(By.css('[data-testid="menu"]'));
        expect(menu).toBeTruthy();
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
