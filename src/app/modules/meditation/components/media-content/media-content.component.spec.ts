import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicModule, IonIcon, IonRange } from '@ionic/angular';

// Components
import { MediaContentComponent } from '@meditation/components/media-content/media-content.component';

// Mocks
import { meditationMock } from '@meditation/mocks/meditation.mock';

describe('MediaComponent', () => {
  let component: MediaContentComponent;
  let fixture: ComponentFixture<MediaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaContentComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaContentComponent);
    component = fixture.componentInstance;

    component.meditation = meditationMock;
    component.seekbarValue = 0;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show image', () => {
    fixture.detectChanges();

    const icon = fixture.debugElement.query(By.css('.media__image'));
    expect(icon).toBeTruthy();
  });

  it('should play', (done: DoneFn) => {
    component.media.playing = false;
    fixture.detectChanges();

    component.playAudio.subscribe((event) => {
      expect(event).toBeUndefined();
      done();
    });

    const icon = fixture.debugElement.query(
      By.directive(IonIcon),
    ).nativeElement;

    icon.click();
  });

  it('should pause', (done: DoneFn) => {
    component.media.playing = true;
    fixture.detectChanges();

    component.pauseAudio.subscribe((event) => {
      expect(event).toBeUndefined();
      done();
    });

    const icon = fixture.debugElement.query(
      By.directive(IonIcon),
    ).nativeElement;

    icon.click();
  });

  it('should seek on touchend event', (done: DoneFn) => {
    fixture.detectChanges();

    component.seekEnd.subscribe((event: TouchEvent) => {
      expect(event).toEqual({} as TouchEvent);
      done();
    });

    const range = fixture.debugElement.query(By.directive(IonRange));

    range.triggerEventHandler('touchend', {});
  });

  it('should seek on mouseup event', (done: DoneFn) => {
    fixture.detectChanges();

    component.seekEnd.subscribe((event) => {
      expect(event).toEqual({} as MouseEvent);
      done();
    });

    const range = fixture.debugElement.query(By.directive(IonRange));

    range.triggerEventHandler('mouseup', {});
  });
});
