import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfnacComponent } from './ofnac.component';

describe('OfnacComponent', () => {
  let component: OfnacComponent;
  let fixture: ComponentFixture<OfnacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfnacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfnacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
