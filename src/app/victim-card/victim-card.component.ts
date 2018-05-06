import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'victim-card',
  templateUrl: './victim-card.component.html',
  styleUrls: ['./victim-card.component.css']
})
export class VictimCardComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;
  @Input() imageFilename: string;
  @Input() linkAddress: string;

  constructor() { }

  ngOnInit() {
  }

  getImageSource(): string {
    console.log("victim ", this.name, this.age, this.imageFilename, this.linkAddress);
    return environment.apiUrl + 'whyquit/images/too-young/' + this.imageFilename;
  }
}
