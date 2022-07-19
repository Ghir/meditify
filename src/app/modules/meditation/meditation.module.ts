import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule } from '@ionic/angular';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Modules
import { MeditationRoutingModule } from '@meditation/meditation-routing.module';
import { ButtonsSelectModule } from '@buttons-select/buttons-select.module';

// Services
import { AudioService } from '@meditation/services/audio.service';
import { AudioStateService } from '@meditation/services/audio-state.service';
import { MeditationsService } from '@meditation/services/meditations.service';

// Components
import { MeditationModalComponent } from '@meditation/pages/meditation-modal/meditation-modal.component';
import { TextContentComponent } from '@meditation/components/text-content/text-content.component';
import { MediaContentComponent } from '@meditation/components/media-content/media-content.component';
import { CategoryCardComponent } from '@meditation/components/category-card/category-card.component';
import { CategoriesComponent } from '@meditation/pages/categories/categories.component';
import { MeditationsComponent } from '@meditation/pages/meditations/meditations.component';
import { MeditationHeaderComponent } from '@meditation/components/meditation-header/meditation-header.component';
import { MeditationItemComponent } from '@meditation/components/meditation-item/meditation-item.component';

// Store
import {
  meditationFeatureKey,
  reducers,
} from '@meditation/store/reducers/meditation.state';

// Effects
import { MeditationsLoadEffect } from '@meditation/store/effects/meditations-load.effect';
import { CategoriesLoadEffect } from '@meditation/store/effects/categories-load.effect';

// Guards
import { CategoriesGuard } from '@meditation/guards/categories.guard';
import { MeditationsGuard } from '@meditation/guards/meditations.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeditationRoutingModule,
    ButtonsSelectModule,
    FlexLayoutModule,
    // store
    StoreModule.forFeature(meditationFeatureKey, reducers),
    EffectsModule.forFeature([MeditationsLoadEffect, CategoriesLoadEffect]),
  ],
  declarations: [
    MeditationsComponent,
    CategoriesComponent,
    MediaContentComponent,
    TextContentComponent,
    MeditationModalComponent,
    CategoryCardComponent,
    MeditationHeaderComponent,
    MeditationItemComponent,
  ],
  providers: [
    AudioService,
    AudioStateService,
    MeditationsService,
    MeditationsGuard,
    CategoriesGuard,
  ],
})
export class MeditationModule {}
