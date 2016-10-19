import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { BurnoutComponent } from './burnout/burnout.component';
import { MentalToughnessComponent } from './mental-toughness/mental-toughness.component';
import { SensationSeekingComponent } from './sensation-seeking/sensation-seeking.component';


const routes: Routes = [
  { path: '', component: ArticleListComponent },
  { path: ':id', component: ArticleDetailComponent },
  { path: 'stress/burnout', component: BurnoutComponent },
  { path: 'stress/mental-toughness', component: MentalToughnessComponent },
  { path: 'stress/sensation-seeking', component: SensationSeekingComponent },
]

export const articlesRouting: ModuleWithProviders = RouterModule.forChild(routes);
