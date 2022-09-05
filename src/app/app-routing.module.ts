import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'meditation',
    loadChildren: () =>
      import('./modules/meditation/meditation.module').then(
        (m) => m.MeditationModule,
      ),
  },
  {
    path: 'timer',
    loadChildren: () =>
      import('./modules/timer/timer.module').then((m) => m.TimerModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
