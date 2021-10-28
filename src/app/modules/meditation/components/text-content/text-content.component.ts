import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextContentComponent {
  @Input()
  text: string;

  constructor() {}
}
