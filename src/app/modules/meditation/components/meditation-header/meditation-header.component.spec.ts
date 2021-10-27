import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { MeditationHeaderComponent } from '@meditation/components/meditation-header/meditation-header.component';

// Mocks
import { categoryMock } from '@meditation/mocks/category.mock';

describe('MeditationHeaderComponent', () => {
  let component: MeditationHeaderComponent;
  let fixture: ComponentFixture<MeditationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeditationHeaderComponent],
      imports: [IonicModule.forRoot(), FlexLayoutModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show category name', () => {
    component.category = categoryMock;
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(
      By.css('.header__title'),
    ).nativeElement;

    expect(titleElement.textContent).toBe('Category Name');
  });

  it('should show category description', () => {
    component.category = categoryMock;
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(
      By.css('.header__description'),
    ).nativeElement;

    expect(titleElement.textContent).toBe('Category Description');
  });
});
