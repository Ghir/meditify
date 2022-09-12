import { By } from '@angular/platform-browser';

import { skip } from 'rxjs/operators';
import {
  ComponentFixture,
  discardPeriodicTasks,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { IonicModule, ModalController, IonButton } from '@ionic/angular';

import { TimerModalComponent } from '@timer/components/timer-modal/timer-modal.component';

describe('TimerModalComponent', () => {
  let component: TimerModalComponent;
  let fixture: ComponentFixture<TimerModalComponent>;

  const modalControllerSpy = jasmine.createSpyObj('ModalController', [
    'dismiss',
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimerModalComponent],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: ModalController, useValue: modalControllerSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(TimerModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', fakeAsync(() => {
    fixture.detectChanges();
    discardPeriodicTasks();

    expect(component).toBeTruthy();
  }));

  it('should update current time', fakeAsync(() => {
    component.duration = 5;
    component.ngOnInit();
    tick(1000);

    expect(component.$currentTime.value).toEqual(4);

    discardPeriodicTasks();
  }));

  it('should stop timer at 0', fakeAsync(() => {
    component.duration = 1;
    component.ngOnInit();

    component.$active.pipe(skip(1)).subscribe((active: boolean) => {
      expect(active).toBeFalse();
    });

    tick(1000);
  }));

  it('should display time', fakeAsync(() => {
    component.duration = 3;
    fixture.detectChanges();

    const timeElement = fixture.debugElement.query(By.css('.time'));
    expect(timeElement.nativeElement.textContent).toBe('3');

    discardPeriodicTasks();
  }));

  it('should discard timer', fakeAsync(() => {
    fixture.detectChanges();
    component.pause();
    fixture.detectChanges();

    const discardButton = fixture.debugElement.query(By.directive(IonButton));
    discardButton.nativeElement.click();

    expect(modalControllerSpy.dismiss).toHaveBeenCalled();
  }));

  it('should finish timer', fakeAsync(() => {
    component.duration = 5;
    fixture.detectChanges();

    tick(1000);
    component.pause();
    fixture.detectChanges();

    const discardButton = fixture.debugElement.queryAll(
      By.directive(IonButton),
    )[1];
    discardButton.nativeElement.click();

    expect(modalControllerSpy.dismiss).toHaveBeenCalledWith({ time: 1 });
  }));
});
