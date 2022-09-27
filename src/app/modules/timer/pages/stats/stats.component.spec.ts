import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';

import { provideMockStore } from '@ngrx/store/testing';

// Components
import { StatsComponent } from '@timer/pages/stats/stats.component';

// Mocks
import { sessionMock } from '@timer/mocks/session.mock';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [StatsComponent],
        imports: [IonicModule.forRoot()],
        providers: [
          provideMockStore({
            initialState: {
              timer: {
                timer: {
                  sessions: [sessionMock, sessionMock],
                },
              },
            },
          }),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(StatsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display session items', () => {
    const items = fixture.debugElement.queryAll(By.css('div.item'));

    expect(items.length).toBe(2);

    const duration = fixture.debugElement.query(By.css('.item__duration'));
    const date = fixture.debugElement.query(By.css('.item__date'));

    expect(duration.nativeElement.textContent.trim()).toBe(
      '15 minutes 0 seconds',
    );
    expect(date.nativeElement.textContent.trim()).toBe('9/27/22, 12:52 PM');
  });
});
