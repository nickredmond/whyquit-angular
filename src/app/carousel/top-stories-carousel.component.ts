import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { TopStory } from '../shared/TopStory';
import {environment} from '../../environments/environment';

@Component({selector: 'top-stories-carousel', templateUrl: './top-stories-carousel.component.html'})
export class TopStoriesCarousel implements OnInit {
  @Input() topStories: TopStory[];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.setCarouselMaxSize();
  }

  getImageSource(topStory: TopStory): string {
    return environment.apiUrl + 'whyquit/images/' + topStory.imageFilename;
  }

  setImageMaxSize(imageElement: HTMLImageElement) {
    let maxCarouselHeight = this.getMaxCarouselHeight();
    imageElement.style.maxHeight = maxCarouselHeight + "px";

    let scalingFactor = maxCarouselHeight / imageElement.naturalHeight;
    imageElement.style.maxWidth = (imageElement.naturalWidth * scalingFactor) + "px";
  }

  private setCarouselMaxSize() {
    let maxCarouselHeight = this.getMaxCarouselHeight();
    document.getElementById("topStoriesCarouselElement").style.maxHeight = maxCarouselHeight + "px";
  }

  private getMaxCarouselHeight(): number {
    let windowHeight = window.innerHeight;
    var BUFFER_HEIGHT = 75;
    return windowHeight - BUFFER_HEIGHT;
  };
}
