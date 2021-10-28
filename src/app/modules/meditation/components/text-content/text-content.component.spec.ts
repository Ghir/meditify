import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// Components
import { TextContentComponent } from '@meditation/components/text-content/text-content.component';

describe('TextContentComponent', () => {
  let component: TextContentComponent;
  let fixture: ComponentFixture<TextContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextContentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show text', () => {
    component.text = 'test';
    fixture.detectChanges();

    const textElement = fixture.debugElement.query(
      By.css('.text__content'),
    ).nativeElement;

    expect(textElement.textContent).toBe('test');
  });
});
