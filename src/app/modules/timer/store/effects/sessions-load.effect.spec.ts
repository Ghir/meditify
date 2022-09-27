import { Observable, of } from 'rxjs';

import { Action } from '@ngrx/store';

// Actions
import {
  loadSessions,
  loadSessionsSuccess,
} from '@timer/store/actions/timer.actions';

// Effect
import { SessionsLoadEffect } from '@timer/store/effects/sessions-load.effect';

// Mocks
import { sessionMock } from '@timer/mocks/session.mock';

describe('SessionLoadEffect', () => {
  let actions$: Observable<any>;
  let effects: SessionsLoadEffect;
  let sessionsServiceSpy: any;

  beforeEach(() => {
    sessionsServiceSpy = jasmine.createSpyObj('SessionsService', [
      'getSessions',
    ]);
    actions$ = of(loadSessions);
    effects = new SessionsLoadEffect(actions$, sessionsServiceSpy);
  });

  it('should load sessions', (done) => {
    sessionsServiceSpy.getSessions.and.returnValue(of([sessionMock]));
    const result = loadSessionsSuccess({
      sessions: [sessionMock],
    });

    (effects.loadSessions$ as Observable<Action>).subscribe((res) => {
      expect(res).toEqual(result);
      expect(sessionsServiceSpy.getSessions).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
