import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() imageSource: string;
  @Input() linkAddress: string;

  constructor() { }

  ngOnInit() {
  }

}
