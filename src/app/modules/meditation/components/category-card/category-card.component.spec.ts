import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';

// Mocks
import { categoryMock } from '@meditation/mocks/category.mock';

// Components
import { CategoryCardComponent } from '@meditation/components/category-card/category-card.component';

describe('CategoryCardComponent', () => {
  let component: CategoryCardComponent;
  let fixture: ComponentFixture<CategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryCardComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show category name', () => {
    component.category = categoryMock;
    fixture.detectChanges();

    const cardElement = fixture.debugElement.query(
      By.css('.card__name'),
    ).nativeElement;

    expect(cardElement.textContent).toBe(categoryMock.name);
  });
});
