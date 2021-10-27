import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

// Utils
import { formatTime } from '@meditation/utils/time.utils';

// Constants
import { INITIAL_MEDIA_STATE } from '@meditation/constants/media.constants';

// Models
import { MediaState } from '@meditation/models/media.model';

@Injectable()
export class AudioStateService {
  private streamSubscription: Subscription;
  private mediaSubject = new BehaviorSubject<MediaState>(INITIAL_MEDIA_STATE);

  readonly $media: Observable<MediaState> = this.mediaSubject
    .asObservable()
    .pipe(shareReplay());

  get media(): MediaState {
    return this.mediaSubject.value;
  }
  set media(value: MediaState) {
    this.mediaSubject.next(value);
  }

  constructor() {}

  reset(): void {
    if (this.streamSubscription) {
      this.streamSubscription.unsubscribe();
    }
    this.media = INITIAL_MEDIA_STATE;
  }

  initializeState($obs: Observable<CustomEvent>): void {
    this.streamSubscription = $obs.subscribe((event: CustomEvent) => {
      const audioObj = event.target as HTMLAudioElement;

      switch (event.type) {
        case 'canplay':
          this.media = { ...this.media, canPlay: true };
          break;

        case 'loadedmetadata':
          const duration = formatTime(audioObj.duration, 'mm:ss');

          this.media = {
            ...this.media,
            duration,
            durationSec: audioObj.duration,
            mediaType: 'mp3',
          };
          break;

        case 'playing':
          this.media = { ...this.media, playing: true };
          break;

        case 'pause':
          this.media = { ...this.media, playing: false };
          break;

        case 'timeupdate':
          const timeSec = audioObj.currentTime;
          const time = formatTime(audioObj.currentTime, 'mm:ss');
          this.media = { ...this.media, time, timeSec };
          break;

        case 'loadstart':
          this.media = { ...this.media, loadStart: true };
          break;
      }
    });
  }
}
