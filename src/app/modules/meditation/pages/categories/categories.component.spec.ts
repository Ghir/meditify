import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IonicModule } from '@ionic/angular';

import { provideMockStore } from '@ngrx/store/testing';

// Mocks
import { categoryMock } from '@meditation/mocks/category.mock';

// Components
import { CategoriesComponent } from '@meditation/pages/categories/categories.component';
import { CategoryCardComponent } from '@meditation/components/category-card/category-card.component';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesComponent, CategoryCardComponent],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        provideMockStore({
          initialState: {
            meditation: {
              meditation: {
                categories: [categoryMock, categoryMock],
              },
            },
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display category cards', () => {
    const cardComponents = fixture.debugElement.queryAll(
      By.directive(CategoryCardComponent),
    );

    expect(cardComponents.length).toBe(2);
  });
});
