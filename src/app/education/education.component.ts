import { Component, OnInit } from '@angular/core';
import { EducationStory } from '../shared/EducationStory';
import { WhyQuitService } from '../services/why-quit/why-quit.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationStories: EducationStory[];
  
  constructor(private whyQuitService: WhyQuitService) { }

  ngOnInit() {
    this.getEducationStories();
  }

  private getEducationStories() {
    this.whyQuitService.getEducationStories()
      .subscribe(educationStories => this.educationStories = educationStories);
  }
}
