import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { IonButton, IonicModule } from '@ionic/angular';

// Components
import { ButtonsSelectComponent } from '@buttons-select/components/buttons-select.component';
import { TimerContainerComponent } from '@timer/pages/timer-container/timer-container.component';

describe('TimerContainerComponent', () => {
  let component: TimerContainerComponent;
  let fixture: ComponentFixture<TimerContainerComponent>;
  let router: Router;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TimerContainerComponent, ButtonsSelectComponent],
        imports: [IonicModule.forRoot(), RouterTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(TimerContainerComponent);
      component = fixture.componentInstance;
      router = TestBed.inject(Router);
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to play', () => {
    const navigateSpy = spyOn(router, 'navigate');

    const button = fixture.debugElement.queryAll(By.directive(IonButton))[0];
    button.nativeElement.click();

    expect(navigateSpy).toHaveBeenCalledWith(['timer/play']);
  });

  it('should navigate to stats', () => {
    const navigateSpy = spyOn(router, 'navigate');

    const button = fixture.debugElement.queryAll(By.directive(IonButton))[1];
    button.nativeElement.click();

    expect(navigateSpy).toHaveBeenCalledWith(['timer/stats']);
  });
});
