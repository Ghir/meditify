import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { ButtonsSelectComponent } from '@buttons-select/components/buttons-select.component';

@NgModule({
  declarations: [ButtonsSelectComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [ButtonsSelectComponent],
})
export class ButtonsSelectModule {}
