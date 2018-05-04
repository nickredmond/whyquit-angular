import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';

declare var $: any;

@Component({
  selector: 'app-top-story',
  templateUrl: './top-story.component.html',
  styleUrls: ['./top-story.component.css']
})
export class TopStoryComponent implements OnInit {
  @Input() whyQuitStoryUrl: string;
  @Input() imageFilename: string;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

  getImageUrl(): string {
    return environment.apiUrl + 'whyquit/images/' + this.imageFilename;
  }

  getMaxHeight(): string {
    return this.getMaxCarouselHeight() + "px";
			// var scalingFactor = maxCarouselHeight / slideImg.height;
			// slideImg.style.maxWidth = (slideImg.width * scalingFactor) + "px";
  }

  private getMaxCarouselHeight(): number {
    let windowHeight = window.innerHeight;
    let logoHeight = parseInt(document.getElementById("mainSiteLogo").style.height, 10);
    const BUFFER_HEIGHT = 75;
    return windowHeight - logoHeight - BUFFER_HEIGHT;
  };
}
