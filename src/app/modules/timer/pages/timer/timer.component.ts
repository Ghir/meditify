import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';

import { OverlayEventDetail } from '@ionic/core';

// Components
import { TimerModalComponent } from '@timer/components/timer-modal/timer-modal.component';

// Constants
import { DEFAULT_DURATION_SECONDS } from '@timer/constants/duration.constant';

// Actions
import { createSession } from '@timer/store/actions/timer.actions';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {
  duration: number;

  constructor(private modalController: ModalController, private store: Store) {}

  onDurationChange(duration: number): void {
    this.duration = duration;
  }

  async presentModal(): Promise<void> {
    const duration = this.duration || DEFAULT_DURATION_SECONDS;

    const modal = await this.modalController.create({
      component: TimerModalComponent,
      componentProps: { duration },
    });

    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      // if session is not discarded
      if (data.data) {
        const timeElapsed = data.data.timeElapsed;
        const timestamp = Date.now() - timeElapsed * 1000; // when the session started

        const session = {
          duration: timeElapsed,
          timestamp,
        };

        this.store.dispatch(createSession({ session }));
      }
    });

    await modal.present();
  }
}
