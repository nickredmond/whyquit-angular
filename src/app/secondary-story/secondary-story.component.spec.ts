import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryStoryComponent } from './secondary-story.component';

describe('SecondaryStoryComponent', () => {
  let component: SecondaryStoryComponent;
  let fixture: ComponentFixture<SecondaryStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
