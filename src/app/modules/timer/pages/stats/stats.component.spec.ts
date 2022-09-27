import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IonicModule } from '@ionic/angular';

import { provideMockStore } from '@ngrx/store/testing';

// Components
import { StatsComponent } from '@timer/pages/stats/stats.component';

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
                timer: {},
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
});
