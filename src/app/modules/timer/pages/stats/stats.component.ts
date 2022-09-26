import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

// Selectors
import { selectSessions } from '@timer/store/selectors/timer.selector';

// Models
import { Session } from '@timer/models/session.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  $sessions: Observable<Session[]> = this.store.select(selectSessions);

  constructor(private store: Store) {}
}
