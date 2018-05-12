import { Injectable } from '@angular/core';
import { TopStory } from '../../shared/TopStory';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SecondaryStory } from '../../shared/SecondaryStory';
import { Victim } from '../../shared/Victim';
import { EducationStory } from '../../shared/EducationStory';
import { ResourceLink } from '../../shared/ResourceLink';

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

  getEducationStories(pageNumber: number, size: number): Observable<EducationStory[]> {
    return this.http.get<EducationStory[]>(this.getEducationStoriesPath(pageNumber, size));
  }

  getResourceLinks(pageNumber: number, size: number): Observable<ResourceLink[]> {
    return this.http.get<ResourceLink[]>(this.getResourceLinksPath(pageNumber, size));
  };

  private getTopStoriesPath(): string {
    return environment.apiUrl + 'whyquit/top-stories';
  }

  private getSecondaryStoriesPath(): string {
    return environment.apiUrl + 'whyquit/secondary-stories';
  }

  private getVictimCardsInfoPath(): string {
    return environment.apiUrl + 'whyquit/too-young';
  }

  private getEducationStoriesPath(pageNumber: number, size: number): string {
    return environment.apiUrl + 'whyquit/education?pageNumber=' + pageNumber + '&size=' + size;
  }

  private getResourceLinksPath(pageNumber: number, size: number): string {
    return environment.apiUrl + 'whyquit/resources?pageNumber=' + pageNumber + '&size=' + size;
  }
}
