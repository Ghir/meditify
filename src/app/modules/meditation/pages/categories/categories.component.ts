import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

// Models
import { Category } from '@meditation/models/category.model';

// Selectors
import { selectCategories } from '@meditation/store/selectors/meditation.selector';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  $categories: Observable<Category[]> = this.store.select(selectCategories);

  constructor(private store: Store) {}
}
