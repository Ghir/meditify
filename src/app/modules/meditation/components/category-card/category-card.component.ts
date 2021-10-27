import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Models
import { Category } from '@meditation/models/category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCardComponent {
  @Input()
  category: Category;

  constructor() {}
}
