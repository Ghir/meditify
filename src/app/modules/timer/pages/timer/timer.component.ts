import { Component, OnInit } from '@angular/core';

// Models
import { timer } from '../../models/timer.model';
import { TimerMenu } from './../../models/timer.model';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  timer = timer;

  timerMenu: TimerMenu[] = [timer.timer, timer.stats];
  menuSelection: TimerMenu[] = [timer.timer];

  constructor() {}

  ngOnInit() {}

  onMenuSelectionChange(selection: TimerMenu[]) {}
}
