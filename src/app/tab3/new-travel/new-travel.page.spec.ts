import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTravelPage } from './new-travel.page';

describe('NewTravelPage', () => {
  let component: NewTravelPage;
  let fixture: ComponentFixture<NewTravelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewTravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
