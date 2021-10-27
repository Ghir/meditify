import { ContentTypes } from './../../../../modules/meditation/models/meditation.model';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonButton, IonicModule } from '@ionic/angular';

// Component
import { ButtonsSelectComponent } from '@buttons-select/components/buttons-select.component';

// Models
import { content } from '@meditation/models/meditation.model';

describe('MediaSelectComponent', () => {
  let component: ButtonsSelectComponent;
  let fixture: ComponentFixture<ButtonsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsSelectComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsSelectComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should toggle and emit value', (done: DoneFn) => {
    component.options = [content.text, content.media];
    fixture.detectChanges();

    component.valueChange.subscribe((value: ContentTypes[]) => {
      expect(value[0]).toBe(content.text);
      done();
    });

    const button = fixture.debugElement.query(By.directive(IonButton));
    button.nativeElement.click();
  });
});
