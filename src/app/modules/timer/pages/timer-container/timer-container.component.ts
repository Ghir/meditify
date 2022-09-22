import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { TimerRoutesTypes } from '@router/routes.model';

// Utils
import { RoutesUtils } from '@router/routes.utils';

@Component({
  selector: 'app-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerContainerComponent {
  timerMenu: TimerRoutesTypes[] = [
    RoutesUtils.TIMER_ROUTES.play,
    RoutesUtils.TIMER_ROUTES.stats,
  ];
  menuSelection: TimerRoutesTypes[] = [RoutesUtils.TIMER_ROUTES.play];

  constructor(private router: Router) {}

  onMenuSelectionChange(selection: TimerRoutesTypes) {
    this.menuSelection = [selection];
    this.router.navigate([`${RoutesUtils.TOP_ROUTES.timer + selection}`]);
  }
}
