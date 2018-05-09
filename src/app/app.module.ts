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
import { ListingViewComponent } from './listing-view/listing-view.component';

const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'education', component: EducationComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
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
    ListingViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
