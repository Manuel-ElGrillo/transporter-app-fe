import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteClientPage } from './delete-client.page';

describe('DeleteClientPage', () => {
  let component: DeleteClientPage;
  let fixture: ComponentFixture<DeleteClientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
