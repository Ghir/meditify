import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';

import { provideMockStore } from '@ngrx/store/testing';

// Components
import { HomeComponent } from '@home/pages/home/home.component';

describe('HomePage', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [IonicModule.forRoot()],
      providers: [
        provideMockStore({
          initialState: { home: { home: { quote: 'test' } } },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show quote', () => {
    const quote = fixture.debugElement.query(
      By.css('.home__quote'),
    ).nativeElement;

    expect(quote.textContent).toBe('test');
  });
});
