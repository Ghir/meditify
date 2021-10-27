import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Models
import { Category } from '@meditation/models/category.model';

@Component({
  selector: 'app-meditation-header',
  templateUrl: './meditation-header.component.html',
  styleUrls: ['./meditation-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeditationHeaderComponent {
  @Input()
  category: Category;

  constructor() {}
}
