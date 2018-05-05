import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TopStoryComponent } from './top-story/top-story.component';

import { CarouselModule } from 'angular2-carousel';
import { NgbdCarousel } from './carousel/carousel.component';

const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TopStoryComponent,
    NgbdCarousel
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
