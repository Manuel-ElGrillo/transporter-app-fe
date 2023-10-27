import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPricePage } from './new-price.page';

describe('NewPricePage', () => {
  let component: NewPricePage;
  let fixture: ComponentFixture<NewPricePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
