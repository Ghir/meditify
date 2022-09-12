import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

// Constants
import { DEFAULT_DURATION } from '@timer/models/timer.model';

@Component({
  selector: 'app-timer-duration',
  templateUrl: './timer-duration.component.html',
  styleUrls: ['./timer-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerDurationComponent {
  @Output()
  durationChange = new EventEmitter<number>();

  defaultDuration = DEFAULT_DURATION;

  constructor() {}

  onChange(event) {
    this.durationChange.emit(+event.detail.value);
  }
}
