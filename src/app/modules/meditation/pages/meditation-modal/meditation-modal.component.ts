import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

import { ModalController } from '@ionic/angular';

import { distinctUntilChanged, filter, map, pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Services
import { AudioStateService } from '@meditation/services/audio-state.service';
import { AudioService } from '@meditation/services/audio.service';

// Models
import {
  Meditation,
  content,
  ContentTypes,
} from '@meditation/models/meditation.model';

@Component({
  selector: 'app-meditation-modal',
  templateUrl: './meditation-modal.component.html',
  styleUrls: ['./meditation-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeditationModalComponent implements OnInit, OnDestroy {
  content = content;

  @Input()
  meditation: Meditation;

  mediaOptions: ContentTypes[] = [content.media, content.text];
  mediaSelection: ContentTypes[];

  $seekbarValue: Observable<number> = this.stateService.$media.pipe(
    pluck('timeSec'),
    filter((value) => value !== undefined),
    map((value: number) => Math.floor(value)),
    distinctUntilChanged(),
  );

  get showButtons(): boolean {
    return !!(
      this.meditation[content.text] &&
      (this.meditation[content.media] || this.meditation.imageUrl)
    );
  }

  constructor(
    public modalController: ModalController,
    public stateService: AudioStateService,
    private audioService: AudioService,
  ) {}

  ngOnInit() {
    this.mediaSelection =
      this.meditation.media || this.meditation.imageUrl
        ? [content.media]
        : [content.text];
  }

  onMediaSelectionChange(contents: ContentTypes[]): void {
    this.mediaSelection = contents;

    if (contents[0] === content.text) {
      this.audioService.pause();
    }
  }

  onPlay(): void {
    if (this.stateService.media.mediaType) {
      this.audioService.play();
    } else {
      this.audioService.initializeStream(this.meditation.media);
    }
  }

  onPause(): void {
    this.audioService.pause();
  }

  onSeekEnd({ target }): void {
    this.audioService.seekTo(target.value);

    if (this.stateService.media.playing) {
      this.onPlay();
    }
  }

  dismissModal(): void {
    this.modalController.dismiss();
    this.stateService.reset();
  }

  ngOnDestroy(): void {
    this.stateService.reset();
  }
}
