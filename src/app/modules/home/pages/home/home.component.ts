import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { Component, ChangeDetectionStrategy } from '@angular/core';

// Selectors
import { selectQuote } from '@home/store/selectors/home.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  $quote: Observable<string> = this.store.select(selectQuote);

  constructor(private store: Store) {}
}
