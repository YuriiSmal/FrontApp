import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePresentationComponent } from './welcome-presentation.component';

describe('WelcomeComponent', () => {
  let component: WelcomePresentationComponent;
  let fixture: ComponentFixture<WelcomePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelcomePresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
