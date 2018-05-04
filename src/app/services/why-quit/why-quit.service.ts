import { Injectable } from '@angular/core';
import { TopStory } from '../../shared/TopStory';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WhyQuitService {

  constructor(
    private http: HttpClient
  ) { }

  getTopStoriesPath(): string {
    return environment.apiUrl + 'whyquit/top-stories';
  }

  getTopStories(): Observable<TopStory[]> {
    return this.http.get<TopStory[]>(this.getTopStoriesPath());
  }
}
