import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroListComponent } from './restro-list.component';

describe('RestroListComponent', () => {
  let component: RestroListComponent;
  let fixture: ComponentFixture<RestroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestroListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
