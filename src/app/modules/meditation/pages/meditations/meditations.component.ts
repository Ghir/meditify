import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModalController } from '@ionic/angular';

import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Store } from '@ngrx/store';

// Models
import {
  Meditation,
  content,
  ContentTypes,
} from '@meditation/models/meditation.model';
import { Category } from '@meditation/models/category.model';

// Components
import { MeditationModalComponent } from '@meditation/components/meditation-modal/meditation-modal.component';

// Selectors
import { selectMeditationsByCategoryId } from '@meditation/store/selectors/meditation.selector';
import { selectCategoryById } from '@meditation/store/selectors/meditation.selector';

@Component({
  selector: 'app-meditations',
  templateUrl: './meditations.component.html',
  styleUrls: ['./meditations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeditationsComponent implements OnInit {
  mediaOptions = [content.media, content.text];

  $mediaSelection = new BehaviorSubject<ContentTypes[]>([]);
  $category: Observable<Category>;
  $meditations: Observable<Meditation[]>;

  constructor(
    private modalController: ModalController,
    private route: ActivatedRoute,
    private store: Store,
  ) {}

  ngOnInit(): void {
    const { categoryId } = this.route.snapshot.queryParams;

    this.$category = this.store.select(selectCategoryById(categoryId));

    this.$meditations = combineLatest([
      this.store
        .select(selectMeditationsByCategoryId(categoryId))
        .pipe(filter((meditations) => meditations !== null)),
      this.$mediaSelection,
    ]).pipe(
      map(([meditations, selectedMedia]: [Meditation[], ContentTypes[]]) =>
        this.filterMeditations(meditations, selectedMedia),
      ),
    );
  }

  async presentModal(meditation: Meditation): Promise<void> {
    const modal = await this.modalController.create({
      component: MeditationModalComponent,
      componentProps: { meditation },
    });

    await modal.present();
  }

  private filterMeditations(
    meditations: Meditation[],
    selectedMedia: ContentTypes[],
  ): Meditation[] {
    return meditations.filter((meditation: Meditation) => {
      for (const media of selectedMedia) {
        if (meditation[media] === undefined || meditation[media] === null) {
          return false;
        }
      }
      return true;
    });
  }
}
