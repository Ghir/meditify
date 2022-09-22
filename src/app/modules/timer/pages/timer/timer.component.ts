import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

// Components
import { TimerModalComponent } from '@timer/components/timer-modal/timer-modal.component';

// Constants
import { DEFAULT_DURATION_SECONDS } from '@timer/models/timer.constants';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerComponent {
  duration: number;

  constructor(private modalController: ModalController) {}

  onDurationChange(duration: number): void {
    this.duration = duration;
  }

  async presentModal(): Promise<void> {
    const duration = this.duration || DEFAULT_DURATION_SECONDS;

    const modal = await this.modalController.create({
      component: TimerModalComponent,
      componentProps: { duration },
    });

    // TODO
    modal.onDidDismiss().then((data) => {
      console.log('time:', data.data?.time);
    });

    await modal.present();
  }
}
