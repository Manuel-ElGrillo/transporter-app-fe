import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPricePage } from './edit-price.page';

describe('EditPricePage', () => {
  let component: EditPricePage;
  let fixture: ComponentFixture<EditPricePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditPricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
