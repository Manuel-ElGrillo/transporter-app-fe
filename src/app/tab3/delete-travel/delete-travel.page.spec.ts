import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteTravelPage } from './delete-travel.page';

describe('DeleteTravelPage', () => {
  let component: DeleteTravelPage;
  let fixture: ComponentFixture<DeleteTravelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteTravelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
