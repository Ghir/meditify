import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

// Constants
import { DEFAULT_DURATION_SECONDS } from '@timer/models/timer.model';

@Component({
  selector: 'app-timer-duration',
  templateUrl: './timer-duration.component.html',
  styleUrls: ['./timer-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerDurationComponent {
  @Output()
  durationChange = new EventEmitter<number>();

  defaultDurationMinutes: number = DEFAULT_DURATION_SECONDS / 60;

  constructor() {}

  onChange(event): void {
    this.durationChange.emit(event.detail.value * 60);
  }
}
