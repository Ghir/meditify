import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-buttons-select',
  templateUrl: './buttons-select.component.html',
  styleUrls: ['./buttons-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonsSelectComponent {
  @Input()
  options: any[] = [];

  @Input()
  multiple = false;

  @Input()
  value: any[] = [];

  @Output()
  valueChange = new EventEmitter<any[]>();

  constructor() {}

  toggle(type: any): void {
    const selection = new Set(this.value);

    if (this.multiple) {
      selection.has(type) ? selection.delete(type) : selection.add(type);
    } else {
      selection.clear();
      selection.add(type);
    }

    this.value = [...selection];
    this.valueChange.emit([...selection]);
  }
}
