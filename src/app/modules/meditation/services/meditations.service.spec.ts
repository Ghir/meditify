import { of } from 'rxjs';

// Service
import { MeditationsService } from '@meditation/services/meditations.service';

// Models
import { Category } from '@meditation/models/category.model';
import { Meditation } from '@meditation/models/meditation.model';

// Mocks
import { categoryMock } from '@meditation/mocks/category.mock';
import { meditationMock } from '@meditation/mocks/meditation.mock';

describe('MeditationsService', () => {
  let service: MeditationsService;
  const firestoreSpy = jasmine.createSpyObj('AngularFirestore', ['collection']);

  firestoreSpy.collection.withArgs('meditations').and.returnValue({
    get: () =>
      of({
        docs: [
          {
            data: () => meditationMock,
          },
        ],
      }),
  });

  firestoreSpy.collection.withArgs('meditation_categories').and.returnValue({
    get: () =>
      of({
        docs: [
          {
            data: () => categoryMock,
          },
        ],
      }),
  });

  beforeEach(() => {
    service = new MeditationsService(firestoreSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get meditations', () => {
    service.getMeditations().subscribe((meditations: Meditation[]) => {
      expect(meditations[0]).toEqual(meditationMock);
    });
  });

  it('should get categories', () => {
    service.getMeditationCategories().subscribe((categories: Category[]) => {
      expect(categories[0]).toEqual(categoryMock);
    });
  });
});
