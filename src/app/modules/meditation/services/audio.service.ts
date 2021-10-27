import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

// Services
import { AudioStateService } from 'app/modules/meditation/services/audio-state.service';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audioObj = new Audio();

  constructor(private state: AudioStateService) {}

  play(): void {
    this.audioObj.play();
  }

  pause(): void {
    this.audioObj.pause();
  }

  seekTo(seconds: number): void {
    this.audioObj.currentTime = seconds;
  }

  initializeStream(url: string): void {
    const $stream = this.streamObservable(url);
    this.state.initializeState($stream);
  }

  private streamObservable(url: string): Observable<CustomEvent> {
    const events = [
      'ended',
      'error',
      'play',
      'playing',
      'pause',
      'timeupdate',
      'canplay',
      'loadedmetadata',
      'loadstart',
    ];

    const addEvents = (obj: HTMLAudioElement, eventKeys: string[], handler) => {
      eventKeys.forEach((event: string) => {
        obj.addEventListener(event, handler);
      });
    };

    const removeEvents = (obj, eventKeys: string[], handler) => {
      eventKeys.forEach((event: string) => {
        obj.removeEventListener(event, handler);
      });
    };

    return new Observable((observer) => {
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      const handler = (event: CustomEvent) => observer.next(event);
      addEvents(this.audioObj, events, handler);

      return () => {
        this.audioObj.pause();
        this.audioObj.currentTime = 0;

        removeEvents(this.audioObj, events, handler);
      };
    });
  }
}
