import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IonicModule, IonCard, IonCardContent } from '@ionic/angular';

// Components
import { MeditationItemComponent } from '@meditation/components/meditation-item/meditation-item.component';

// Models
import { Meditation } from '@meditation/models/meditation.model';

// Mocks
import { meditationMock } from '@meditation/mocks/meditation.mock';

describe('MeditationItemComponent', () => {
  let component: MeditationItemComponent;
  let fixture: ComponentFixture<MeditationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeditationItemComponent, IonCard, IonCardContent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeditationItemComponent);
    component = fixture.componentInstance;

    component.meditation = meditationMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show meditation title', () => {
    const title = fixture.debugElement.query(
      By.css('.item__title'),
    ).nativeElement;

    expect(title.textContent).toBe('Meditation Title');
  });

  it('should emit select event', (done: DoneFn) => {
    component.selected.subscribe((data: Meditation) => {
      expect(data).toEqual(meditationMock);

      done();
    });

    const item = fixture.debugElement.query(By.css('.item')).nativeElement;

    item.click();
  });
});
