import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'secondary-story',
  templateUrl: './secondary-story.component.html',
  styleUrls: ['./secondary-story.component.css']
})
export class SecondaryStoryComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() linkAddress: string;

  constructor() { }

  ngOnInit() {
  }

}
