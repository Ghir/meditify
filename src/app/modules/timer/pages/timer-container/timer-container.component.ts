import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { timer } from '@timer/models/timer.model';
import { TimerMenu } from '@timer/models/timer.model';

@Component({
  selector: 'app-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerContainerComponent {
  timerMenu: TimerMenu[] = [timer.timer, timer.stats];
  menuSelection: TimerMenu[] = [timer.timer];

  constructor(private router: Router) {}

  onMenuSelectionChange(selection: TimerMenu) {
    this.menuSelection = [selection];
    this.router.navigate(['timer', selection]);
  }
}
