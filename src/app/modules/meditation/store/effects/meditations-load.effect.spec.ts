import { Observable, of } from 'rxjs';

import { Action } from '@ngrx/store';

// Actions
import {
  loadMeditations,
  loadMeditationsSuccess,
} from '@meditation/store/actions/meditation.actions';

// Effect
import { MeditationsLoadEffect } from '@meditation/store/effects/meditations-load.effect';

// Mocks
import { meditationMock } from '@meditation/mocks/meditation.mock';

describe('MeditationsLoadEffect', () => {
  let actions$: Observable<any>;
  let effects: MeditationsLoadEffect;
  let meditationsServiceSpy: any;

  beforeEach(() => {
    meditationsServiceSpy = jasmine.createSpyObj('MeditationsService', [
      'getMeditations',
    ]);
    actions$ = of(loadMeditations);
    effects = new MeditationsLoadEffect(actions$, meditationsServiceSpy);
  });

  it('should load meditations', (done) => {
    meditationsServiceSpy.getMeditations.and.returnValue(of([meditationMock]));
    const result = loadMeditationsSuccess({
      meditations: [meditationMock],
    });

    (effects.loadMeditations$ as Observable<Action>).subscribe((res) => {
      expect(res).toEqual(result);
      expect(meditationsServiceSpy.getMeditations).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
