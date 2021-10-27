import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

// Models
import { content, Meditation } from '@meditation/models/meditation.model';

@Component({
  selector: 'app-meditation-item',
  templateUrl: './meditation-item.component.html',
  styleUrls: ['./meditation-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeditationItemComponent {
  content = content;

  @Input()
  meditation: Meditation;

  @Output()
  selected = new EventEmitter<Meditation>();

  constructor() {}
}
