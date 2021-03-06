import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

import { CarouselModule } from 'angular2-carousel';
import { TopStoriesCarousel } from './top-stories-carousel/top-stories-carousel.component';
import { SecondaryStoryComponent } from './secondary-story/secondary-story.component';
import { VictimCardComponent } from './victim-card/victim-card.component';

import { EducationComponent } from './education/education.component';
import { StoryCardComponent } from './story-card/story-card.component';
import { DisclaimerModalComponent } from './disclaimer-modal/disclaimer-modal.component';

const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'education', component: EducationComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TopStoriesCarousel,
    SecondaryStoryComponent,
    VictimCardComponent,
    EducationComponent,
    StoryCardComponent,
    DisclaimerModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { onSameUrlNavigation: "reload" }
      // { enableTracing: true } // debugging only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
