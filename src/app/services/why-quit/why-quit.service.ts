import { Injectable } from '@angular/core';
import { TopStory } from '../../shared/TopStory';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SecondaryStory } from '../../shared/SecondaryStory';
import { Victim } from '../../shared/Victim';

@Injectable({
  providedIn: 'root'
})
export class WhyQuitService {

  constructor(private http: HttpClient) { }

  getTopStories(): Observable<TopStory[]> {
    return this.http.get<TopStory[]>(this.getTopStoriesPath());
  }

  getSecondaryStories(): Observable<SecondaryStory[]> {
    return this.http.get<SecondaryStory[]>(this.getSecondaryStoriesPath());
  }

  getVictimCardsInfo(): Observable<Victim[]> {
    return this.http.get<Victim[]>(this.getVictimCardsInfoPath());
  }

  private getTopStoriesPath(): string {
    return environment.apiUrl + 'whyquit/top-stories';
  }

  private getSecondaryStoriesPath(): string {
    return environment.apiUrl + 'whyquit/secondary-stories';
  }

  private getVictimCardsInfoPath(): string {
    return environment.apiUrl + 'whyquit/too-young';
  }
}
