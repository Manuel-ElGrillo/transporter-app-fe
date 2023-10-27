import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletePricePage } from './delete-price.page';

describe('DeletePricePage', () => {
  let component: DeletePricePage;
  let fixture: ComponentFixture<DeletePricePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeletePricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
