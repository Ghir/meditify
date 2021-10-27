import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { IonicModule } from '@ionic/angular';

// Routes
import { HomePageRoutingModule } from '@home/home-routing.module';

// Components
import { HomeComponent } from '@home/pages/home/home.component';

// Services
import { QuoteService } from '@home/services/quote.service';

// Store
import { homeFeatureKey, reducers } from '@home/store/reducers/home.state';
import { QuoteLoadEffect } from '@home/store/effects/quote-load.effect';

@NgModule({
  declarations: [HomeComponent],
  providers: [QuoteService],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FlexLayoutModule,
    // store
    StoreModule.forFeature(homeFeatureKey, reducers),
    EffectsModule.forFeature([QuoteLoadEffect]),
  ],
})
export class HomeModule {}
