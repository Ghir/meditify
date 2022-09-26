import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable, of } from 'rxjs';

import { Store } from '@ngrx/store';

// Actions
import { loadSessions } from '@timer/store/actions/timer.actions';

@Injectable()
export class SessionsGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<boolean> {
    this.store.dispatch(loadSessions());

    return of(true);
  }
}
