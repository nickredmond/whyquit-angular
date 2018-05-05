import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { TopStory } from '../shared/TopStory';
import {environment} from '../../environments/environment';

@Component({selector: 'ngbd-carousel', templateUrl: './carousel.component.html'})
export class NgbdCarousel implements OnInit {
  @Input() topStories: TopStory[];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
  }

  getImageSource(topStory: TopStory): string {
    return environment.apiUrl + 'whyquit/images/' + topStory.imageFilename;
  }
}
