import { Component, OnInit } from '@angular/core';
import { WhyQuitService } from '../services/why-quit/why-quit.service';
import { TopStory } from '../shared/TopStory';
import { SecondaryStory } from '../shared/SecondaryStory';
import { Victim } from '../shared/Victim';
import { EducationStory } from '../shared/EducationStory';

@Component({
  selector: 'app-index',
  providers: [ WhyQuitService ],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  VICTIM_CARDS_PER_ROW: number;

  topStories: TopStory[];
  secondaryStories: SecondaryStory[];
  victims: Victim[];
  educationStories: EducationStory[];

  constructor(private whyQuitService: WhyQuitService) {
    this.VICTIM_CARDS_PER_ROW = 3;
    this.victims = [];
  }

  ngOnInit() {
    this.getTopStories();
    this.getSecondaryStories();
    this.getVictimCardsInfo();
    this.getEducationStories();
  }

  getVictimCardRowNumbers(): number[] {
    let numberOfRows = Math.ceil(this.victims.length / this.VICTIM_CARDS_PER_ROW);
    let rowNumbers = Array(numberOfRows);
    for (var i = 0; i < numberOfRows; i++) {
      rowNumbers[i] = (i + 1);
    }

    return rowNumbers;
  }

  getVictimsForRow(rowNumber: number): Victim[] {
    let victimsAlreadyDisplayed = this.VICTIM_CARDS_PER_ROW * (rowNumber - 1);
    let numberOfVictimsInRow = Math.min(this.VICTIM_CARDS_PER_ROW, this.victims.length - victimsAlreadyDisplayed);
    return this.victims.slice(victimsAlreadyDisplayed, victimsAlreadyDisplayed + numberOfVictimsInRow);
  }

  private getTopStories(): void {
    this.whyQuitService.getTopStories()
      .subscribe(topStories => this.topStories = topStories);
  }

  private getSecondaryStories(): void {
    this.whyQuitService.getSecondaryStories()
      .subscribe(secondaryStories => this.secondaryStories = secondaryStories);
  }

  private getVictimCardsInfo(): void {
     this.whyQuitService.getVictimCardsInfo()
      .subscribe(victims => this.victims = victims);
  }

  private getEducationStories(): void {
    this.whyQuitService.getEducationStories(1, 3)
      .subscribe(educationStories => this.educationStories = educationStories);
  }
}