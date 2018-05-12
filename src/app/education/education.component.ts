import { Component, OnInit } from '@angular/core';
import { EducationStory } from '../shared/EducationStory';
import { WhyQuitService } from '../services/why-quit/why-quit.service';
import { environment } from '../../environments/environment';

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

  getImageSource(imageFilename: string): string {
    return (imageFilename == null) ? null : environment.apiUrl + "whyquit/images/education/" + imageFilename;
  }

  private getEducationStories() {
    this.whyQuitService.getEducationStories(1, 100)
      .subscribe(educationStories => this.educationStories = educationStories);
  }
}
