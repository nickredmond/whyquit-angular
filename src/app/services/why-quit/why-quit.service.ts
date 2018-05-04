import { Injectable } from '@angular/core';
import { TopStory } from '../../shared/TopStory';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WhyQuitService {

  constructor(
    private http: HttpClient
  ) { }

  getTopStories(): TopStory[] {

  }
}
