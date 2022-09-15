import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IonicModule, IonInput } from '@ionic/angular';

// Components
import { TimerDurationComponent } from '@timer/components/timer-duration/timer-duration.component';

// Constants
import { DEFAULT_DURATION_SECONDS } from '@timer/models/timer.model';

describe('TimerDurationComponent', () => {
  let component: TimerDurationComponent;
  let fixture: ComponentFixture<TimerDurationComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TimerDurationComponent],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(TimerDurationComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain default duration', () => {
    const input = fixture.debugElement.query(By.directive(IonInput));

    expect(input.nativeElement.value).toEqual(DEFAULT_DURATION_SECONDS / 60);
  });

  it('should emit input change event', (done: DoneFn) => {
    component.durationChange.subscribe((duration: number) => {
      expect(duration).toEqual(60);
      done();
    });

    const input = fixture.debugElement.query(By.directive(IonInput));
    input.triggerEventHandler('ionChange', { detail: { value: 1 } });
  });
});
