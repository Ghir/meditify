import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IonicModule, IonInput, ModalController } from '@ionic/angular';

import { provideMockStore } from '@ngrx/store/testing';

// Components
import { TimerComponent } from '@timer/pages/timer/timer.component';
import { TimerDurationComponent } from '@timer/components/timer-duration/timer-duration.component';
import { TimerModalComponent } from '@timer/components/timer-modal/timer-modal.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  const modalControllerSpy = jasmine.createSpyObj('ModalController', [
    'create',
  ]);

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TimerComponent, TimerDurationComponent],
        imports: [IonicModule.forRoot()],
        providers: [
          { provide: ModalController, useValue: modalControllerSpy },
          provideMockStore(),
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(TimerComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update duration', () => {
    const input = fixture.debugElement.query(By.directive(IonInput));
    input.triggerEventHandler('ionChange', { detail: { value: 1 } });

    expect(component.duration).toBe(60);
  });

  it('should display modal', () => {
    const startIcon = fixture.debugElement.query(
      By.css('.timer__start'),
    ).nativeElement;

    startIcon.click();

    expect(modalControllerSpy.create).toHaveBeenCalledWith({
      component: TimerModalComponent,
      componentProps: { duration: 900 },
    });
  });
});
