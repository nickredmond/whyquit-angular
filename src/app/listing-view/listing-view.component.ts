import { Component, OnInit, Input } from '@angular/core';
import { ListingViewItem } from '../shared/ListingViewItem';

@Component({
  selector: 'listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css']
})
export class ListingViewComponent implements OnInit {
  @Input() viewItems: ListingViewItem[];

  constructor() { }

  ngOnInit() {
  }

}
