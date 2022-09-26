import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ModalController } from '@ionic/angular';

import { interval, BehaviorSubject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-timer-modal',
  templateUrl: './timer-modal.component.html',
  styleUrls: ['./timer-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerModalComponent implements OnInit, OnDestroy {
  // data
  @Input()
  duration: number;

  // state
  $currentTime: BehaviorSubject<number>;
  $active: BehaviorSubject<boolean>;

  constructor(private modalController: ModalController) {}

  ngOnInit(): void {
    this.$currentTime = new BehaviorSubject(this.duration);
    this.$active = new BehaviorSubject(false);

    this.start();
  }

  start(): void {
    this.$active.next(true);
    interval(1000)
      .pipe(takeUntil(this.$active.pipe(filter((active: boolean) => !active))))
      .subscribe(() => {
        this.$currentTime.next(this.$currentTime.value - 1);

        if (this.$currentTime.value === 0) {
          this.$active.next(false);
        }
      });
  }

  pause(): void {
    this.$active.next(false);
  }

  finish(): void {
    const timeElapsed = this.duration - this.$currentTime.value;

    this.modalController.dismiss({ timeElapsed });
  }

  discard(): void {
    this.modalController.dismiss();
  }

  ngOnDestroy(): void {
    this.$active.next(false);
  }
}
