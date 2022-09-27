import { of } from 'rxjs';

// Service
import { SessionsService } from '@timer/services/sessions.service';

// Models
import { Session } from '@timer/models/session.model';

// Mocks
import { sessionMock } from '@timer/mocks/session.mock';

describe('SessionsService', () => {
  let service: SessionsService;
  const firestoreSpy = jasmine.createSpyObj('AngularFirestore', ['collection']);

  firestoreSpy.collection.withArgs('sessions').and.returnValue({
    get: () =>
      of({
        docs: [
          {
            data: () => sessionMock,
          },
        ],
      }),
    add: () => Promise.resolve({ id: 'test' }),
  });

  beforeEach(() => {
    service = new SessionsService(firestoreSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get sessions', () => {
    service.getSessions().subscribe((sessions: Session[]) => {
      expect(sessions[0]).toEqual(sessionMock);
    });
  });

  it('should create session', (done) => {
    service.createSession(sessionMock).subscribe((data) => {
      expect(data.id).toBe('test');
      done();
    });
  });
});
