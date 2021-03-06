import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { articlesRouting }from './articles.routing';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesService } from './articles.service';
import { BurnoutComponent } from './burnout/burnout.component';
import { InstructionsComponent } from './shared/instructions/instructions.component';
import { ResultTableComponent } from './shared/result-table/result-table.component';
import { RadioQuestionsComponent } from './shared/radio-questions/radio-questions.component';
import { MentalToughnessComponent } from './mental-toughness/mental-toughness.component';
import { RadioTestComponent } from './shared/radio-test/radio-test.component';
import { GradientResultComponent } from './shared/gradient-result/gradient-result.component';
import { SensationSeekingComponent } from './sensation-seeking/sensation-seeking.component';
import { QuestionPairsComponent } from './shared/question-pairs/question-pairs.component';
import { LineBreakComponent } from './shared/line-break/line-break.component';
import { PeronalityTypesComponent } from './peronality-types/peronality-types.component';
import { StressScaleComponent } from './stress-scale/stress-scale.component';
import { NumberQuestionsComponent } from './shared/number-questions/number-questions.component';
import { ArticleIntroductionComponent } from './shared/article-introduction/article-introduction.component';


@NgModule({
  providers: [ ArticlesService ],
  imports: [
    FormsModule,
    CommonModule,
    articlesRouting
  ],
  declarations: [ ArticleListComponent, ArticleDetailComponent, BurnoutComponent, InstructionsComponent, ResultTableComponent, RadioQuestionsComponent, MentalToughnessComponent, RadioTestComponent, GradientResultComponent, SensationSeekingComponent, QuestionPairsComponent, LineBreakComponent, PeronalityTypesComponent, StressScaleComponent, NumberQuestionsComponent, ArticleIntroductionComponent]
})
export class ArticlesModule { }
