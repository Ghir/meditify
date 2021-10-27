import { of } from 'rxjs';

// Mocks
import { quoteMock } from '@home/mocks/quote.mock';

// Service
import { QuoteService } from '@home/services/quote.service';

describe('MeditationsService', () => {
  let service: QuoteService;
  const firestoreSpy = jasmine.createSpyObj('AngularFirestore', ['collection']);

  firestoreSpy.collection.and.returnValue({
    get: () =>
      of({
        docs: [
          {
            data: () => quoteMock,
          },
        ],
      }),
  });

  beforeEach(() => {
    service = new QuoteService(firestoreSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get quote', () => {
    service.getDailyQuote().subscribe((quote: string) => {
      expect(quote).toEqual(quoteMock.content);
    });
  });
});
