import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { INITIAL_MEDIA_STATE } from '@meditation/constants/media.constants';

// Models
import { MediaState } from '@meditation/models/media.model';
import { Meditation } from '@meditation/models/meditation.model';

@Component({
  selector: 'app-media-content',
  templateUrl: './media-content.component.html',
  styleUrls: ['./media-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaContentComponent {
  @Input()
  meditation: Meditation;

  @Input()
  seekbarValue: number;

  @Input()
  media: MediaState = INITIAL_MEDIA_STATE;

  @Output()
  playAudio = new EventEmitter<void>();

  @Output()
  pauseAudio = new EventEmitter<void>();

  @Output()
  seekEnd = new EventEmitter<MouseEvent | TouchEvent>();

  constructor() {}
}
