import { Observable, of } from 'rxjs';

import { Action } from '@ngrx/store';

// Actions
import {
  createSession,
  createSessionSuccess,
} from '@timer/store/actions/timer.actions';

// Effect
import { SessionCreateEffect } from '@timer/store/effects/session-create.effect';

// Mocks
import { sessionMock } from '@timer/mocks/session.mock';

describe('SessionCreateEffect', () => {
  let actions$: Observable<any>;
  let effects: SessionCreateEffect;
  let sessionsServiceSpy: any;

  beforeEach(() => {
    sessionsServiceSpy = jasmine.createSpyObj('SessionsService', [
      'createSession',
    ]);
    actions$ = of(createSession({ session: sessionMock }));
    effects = new SessionCreateEffect(actions$, sessionsServiceSpy);
  });

  it('should create session', (done) => {
    sessionsServiceSpy.createSession.and.returnValue(of({}));

    (effects.createSession$ as Observable<Action>).subscribe((res) => {
      expect(res).toEqual(createSessionSuccess());
      expect(sessionsServiceSpy.createSession).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
