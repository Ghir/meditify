import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CategoriesComponent } from '@meditation/pages/categories/categories.component';
import { MeditationsComponent } from '@meditation/pages/meditations/meditations.component';

// Guards
import { CategoriesGuard } from '@meditation/guards/categories.guard';
import { MeditationsGuard } from '@meditation/guards/meditations.guard';

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [CategoriesGuard],
  },
  {
    path: 'meditations',
    component: MeditationsComponent,
    canActivate: [MeditationsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeditationRoutingModule {}
