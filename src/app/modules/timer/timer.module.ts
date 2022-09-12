import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule } from '@ionic/angular';

// Modules
import { TimerRoutingModule } from '@timer/timer-routing.module';
import { ButtonsSelectModule } from '@buttons-select/buttons-select.module';

// Components
import { TimerContainerComponent } from '@timer/pages/timer-container/timer-container.component';
import { TimerDurationComponent } from '@timer/components/timer-duration/timer-duration.component';
import { TimerModalComponent } from '@timer/components/timer-modal/timer-modal.component';
import { TimerComponent } from '@timer/pages/timer/timer.component';

@NgModule({
  declarations: [
    TimerContainerComponent,
    TimerComponent,
    TimerDurationComponent,
    TimerModalComponent,
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    ButtonsSelectModule,
    IonicModule,
    FlexLayoutModule,
  ],
})
export class TimerModule {}
