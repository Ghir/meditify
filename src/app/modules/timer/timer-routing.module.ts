import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { TimerContainerComponent } from '@timer/pages/timer-container/timer-container.component';
import { StatsComponent } from '@timer/pages/stats/stats.component';
import { TimerComponent } from '@timer/pages/timer/timer.component';

const routes: Routes = [
  {
    path: '',
    component: TimerContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'play',
        pathMatch: 'full',
      },
      {
        path: 'play',
        component: TimerComponent,
      },
      {
        path: 'stats',
        component: StatsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerRoutingModule {}
