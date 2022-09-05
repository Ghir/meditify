import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule } from '@ionic/angular';

// Modules
import { TimerRoutingModule } from './timer-routing.module';
import { ButtonsSelectModule } from '@buttons-select/buttons-select.module';

// Components
import { TimerComponent } from './pages/timer/timer.component';

@NgModule({
  declarations: [TimerComponent],
  imports: [
    CommonModule,
    TimerRoutingModule,
    ButtonsSelectModule,
    IonicModule,
    FlexLayoutModule,
  ],
})
export class TimerModule {}
