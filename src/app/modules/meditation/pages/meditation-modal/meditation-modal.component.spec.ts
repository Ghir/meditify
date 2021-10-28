import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicModule, IonIcon, ModalController } from '@ionic/angular';

import { of } from 'rxjs';

// Modules
import { ButtonsSelectModule } from '@buttons-select/buttons-select.module';

// Components
import { TextContentComponent } from '@meditation/components/text-content/text-content.component';
import { MediaContentComponent } from '@meditation/components/media-content/media-content.component';
import { MeditationModalComponent } from '@meditation/pages/meditation-modal/meditation-modal.component';
import { ButtonsSelectComponent } from '@buttons-select/components/buttons-select.component';

// Services
import { AudioStateService } from '@meditation/services/audio-state.service';
import { AudioService } from '@meditation/services/audio.service';

// Mocks
import { meditationMock } from '@meditation/mocks/meditation.mock';

// Models
import { content } from '@meditation/models/meditation.model';

describe('MeditationModalComponent', () => {
  let component: MeditationModalComponent;
  let fixture: ComponentFixture<MeditationModalComponent>;

  const audioServiceSpy = jasmine.createSpyObj('AudioService', [
    'pause',
    'play',
    'seekTo',
    'initializeStream',
  ]);
  const modalControllerSpy = jasmine.createSpyObj('ModalController', [
    'dismiss',
  ]);
  const stateServiceMock = {
    reset: () => {},
    $media: of({ timeSec: 1 }),
    get media() {
      return {
        mediaType: 'mp3',
        playing: true,
      };
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MeditationModalComponent,
        MediaContentComponent,
        TextContentComponent,
      ],
      imports: [IonicModule.forRoot(), ButtonsSelectModule],
      providers: [
        { provide: ModalController, useValue: modalControllerSpy },
        { provide: AudioService, useValue: audioServiceSpy },
        { provide: AudioStateService, useValue: stateServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MeditationModalComponent);
    component = fixture.componentInstance;

    component.meditation = meditationMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close modal and stop audio', () => {
    const resetSpy = spyOn(stateServiceMock, 'reset');

    const closeIcon = fixture.debugElement.query(
      By.directive(IonIcon),
    ).nativeElement;

    closeIcon.click();

    expect(resetSpy).toHaveBeenCalled();
    expect(modalControllerSpy.dismiss).toHaveBeenCalled();
  });

  it('should change media selection and stop audio', () => {
    const buttons = fixture.debugElement.query(
      By.directive(ButtonsSelectComponent),
    );

    buttons.componentInstance.valueChange.emit([content.text]);

    expect(component.mediaSelection).toEqual([content.text]);
    expect(audioServiceSpy.pause).toHaveBeenCalled();
  });

  it('should play audio', () => {
    const mediaContent = fixture.debugElement.query(
      By.directive(MediaContentComponent),
    );

    mediaContent.componentInstance.playAudio.emit();

    expect(audioServiceSpy.play).toHaveBeenCalled();
  });

  it('should initialize audio stream', (done: DoneFn) => {
    spyOnProperty(stateServiceMock, 'media', 'get').and.returnValue({});

    const mediaContent = fixture.debugElement.query(
      By.directive(MediaContentComponent),
    );

    mediaContent.componentInstance.playAudio.emit();

    expect(audioServiceSpy.initializeStream).toHaveBeenCalled();
    done();
  });

  it('should pause audio', () => {
    const mediaContent = fixture.debugElement.query(
      By.directive(MediaContentComponent),
    );

    mediaContent.componentInstance.pauseAudio.emit();

    expect(audioServiceSpy.pause).toHaveBeenCalled();
  });

  it('should seek audio', () => {
    const mediaContent = fixture.debugElement.query(
      By.directive(MediaContentComponent),
    );

    mediaContent.componentInstance.seekEnd.emit({ target: { value: 1 } });

    expect(audioServiceSpy.seekTo).toHaveBeenCalledWith(1);
    expect(audioServiceSpy.play).toHaveBeenCalled();
  });

  it('should pass seekbar value to MediaContentComponent', () => {
    const mediaContent = fixture.debugElement.query(
      By.directive(MediaContentComponent),
    );

    expect(mediaContent.componentInstance.seekbarValue).toBe(1);
  });
});
