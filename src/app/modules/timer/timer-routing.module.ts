import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { TimerComponent } from './pages/timer/timer.component';

const routes: Routes = [
  { path: '', redirectTo: 'timer', pathMatch: 'full' },
  {
    path: 'timer',
    component: TimerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerRoutingModule {}
