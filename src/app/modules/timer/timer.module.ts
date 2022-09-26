import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule } from '@ionic/angular';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// Modules
import { TimerRoutingModule } from '@timer/timer-routing.module';
import { ButtonsSelectModule } from '@buttons-select/buttons-select.module';

// Components
import { TimerContainerComponent } from '@timer/pages/timer-container/timer-container.component';
import { TimerDurationComponent } from '@timer/components/timer-duration/timer-duration.component';
import { TimerModalComponent } from '@timer/components/timer-modal/timer-modal.component';
import { TimerComponent } from '@timer/pages/timer/timer.component';
import { StatsComponent } from '@timer/pages/stats/stats.component';

// Services
import { SessionsService } from '@timer/services/sessions.service';

// Guards
import { SessionsGuard } from '@timer/guards/sessions.guard';

// Store
import { reducers, timerFeatureKey } from '@timer/store/reducers/timer.state';

// Effects
import { SessionsLoadEffect } from '@timer/store/effects/sessions-load.effect';
import { SessionCreateEffect } from '@timer/store/effects/session-create.effect';

@NgModule({
  declarations: [
    TimerContainerComponent,
    TimerComponent,
    TimerDurationComponent,
    TimerModalComponent,
    StatsComponent,
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    ButtonsSelectModule,
    IonicModule,
    FlexLayoutModule,
    // store
    StoreModule.forFeature(timerFeatureKey, reducers),
    EffectsModule.forFeature([SessionsLoadEffect, SessionCreateEffect]),
  ],
  providers: [SessionsGuard, SessionsService],
})
export class TimerModule {}
