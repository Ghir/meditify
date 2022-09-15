import { RouterTestingModule } from '@angular/router/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { IonicModule, ModalController } from '@ionic/angular';

import { skip } from 'rxjs/operators';

// Components
import { MeditationHeaderComponent } from '@meditation/components/meditation-header/meditation-header.component';
import { MeditationItemComponent } from '@meditation/components/meditation-item/meditation-item.component';
import { MeditationsComponent } from '@meditation/pages/meditations/meditations.component';
import { ButtonsSelectComponent } from '@buttons-select/components/buttons-select.component';

// Mocks
import { meditationMock } from '@meditation/mocks/meditation.mock';
import { categoryMock } from '@meditation/mocks/category.mock';

// Models
import { content } from '@meditation/models/meditation.model';
import { ContentTypes } from '@meditation/models/meditation.model';

// Selectors
import { selectMeditations } from '@meditation/store/selectors/meditation.selector';

describe('MeditationsComponent', () => {
  let component: MeditationsComponent;
  let fixture: ComponentFixture<MeditationsComponent>;
  let store: MockStore;
  const modalControllerSpy = jasmine.createSpyObj('ModalController', [
    'create',
  ]);
  const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', [], {
    snapshot: {
      queryParams: {
        categoryId: 'focus',
      },
    },
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MeditationsComponent,
        MeditationHeaderComponent,
        ButtonsSelectComponent,
        MeditationItemComponent,
      ],
      imports: [IonicModule.forRoot(), RouterTestingModule],
      providers: [
        provideMockStore({
          initialState: {
            meditation: {
              meditation: {
                meditations: [meditationMock, meditationMock],
                categories: [categoryMock, categoryMock],
              },
            },
          },
        }),
        { provide: ModalController, useValue: modalControllerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MeditationsComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change media selection', () => {
    component.$mediaSelection
      .pipe(skip(1))
      .subscribe((media: ContentTypes[]) => {
        expect(media[0]).toEqual(content.text);
      });

    component.$mediaSelection.next([content.text]);
  });

  it('should display meditation header', () => {
    const header = fixture.debugElement.query(
      By.directive(MeditationHeaderComponent),
    );

    expect(header).toBeDefined();
  });

  it('should display meditation items and select on click', fakeAsync(() => {
    const presentSpy = jasmine.createSpy();
    modalControllerSpy.create.and.returnValue({ present: presentSpy });

    const items = fixture.debugElement.queryAll(
      By.directive(MeditationItemComponent),
    );

    expect(items.length).toBe(2);

    items[0].componentInstance.selected.emit();
    tick();

    expect(modalControllerSpy.create).toHaveBeenCalled();
    expect(presentSpy).toHaveBeenCalled();
  }));

  it('should filter meditations', () => {
    const meditationMediaMock = {
      id: 'id',
      categoryId: 'categoryId',
      title: 'title',
      text: null,
      media: 'https://domain.com',
      imageUrl: 'img.jpg',
    };

    store.overrideSelector(selectMeditations, [
      meditationMediaMock,
      meditationMock,
    ]);
    component.$mediaSelection.next([content.text]);

    component.ngOnInit();
    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(
      By.directive(MeditationItemComponent),
    );

    expect(items.length).toBe(1);
  });
});
