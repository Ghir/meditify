// Store
import { initialState, reducer } from '@timer/store/reducers/timer.reducer';

// Actions
import {
  loadSessions,
  loadSessionsFailure,
  loadSessionsSuccess,
  createSession,
  createSessionFailure,
  createSessionSuccess,
} from '@timer/store/actions/timer.actions';

// Mocks
import { sessionMock } from '@timer/mocks/session.mock';

describe('Timer Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;

    const result = reducer(initialState, action);

    expect(result).toBe(initialState);
  });

  it('should set sessions loading state', () => {
    const result = reducer(initialState, loadSessions);

    expect(result.isSessionsLoading).toBe(true);
    expect(result.isSessionsLoaded).toBe(false);
    expect(result.isSessionsError).toBe(false);
  });

  it('should set sessions error state', () => {
    const result = reducer(initialState, loadSessionsFailure);

    expect(result.isSessionsError).toBe(true);
    expect(result.isSessionsLoading).toBe(false);
    expect(result.isSessionsLoaded).toBe(false);
  });

  it('should set sessions loading success', () => {
    const result = reducer(
      initialState,
      loadSessionsSuccess({
        sessions: [sessionMock],
      }),
    );

    expect(result.sessions[0].duration).toBe(sessionMock.duration);
    expect(result.isSessionsError).toBe(false);
    expect(result.isSessionsLoading).toBe(false);
    expect(result.isSessionsLoaded).toBe(true);
  });

  it('should set creation in progress state', () => {
    const result = reducer(
      initialState,
      createSession({ session: sessionMock }),
    );

    expect(result.isCreationInProgress).toBe(true);
    expect(result.isCreationDone).toBe(false);
    expect(result.isCreationError).toBe(false);
  });

  it('should set creation error state', () => {
    const result = reducer(initialState, createSessionFailure);

    expect(result.isCreationError).toBe(true);
    expect(result.isCreationInProgress).toBe(false);
    expect(result.isCreationDone).toBe(true);
  });

  it('should set creation success', () => {
    const result = reducer(initialState, createSessionSuccess());

    expect(result.isCreationError).toBe(false);
    expect(result.isCreationInProgress).toBe(false);
    expect(result.isCreationDone).toBe(true);
  });
});
