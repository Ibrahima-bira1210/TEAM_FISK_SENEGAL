import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteLettreDetailsComponent } from './boite-lettre-details.component';

describe('BoiteLettreDetailsComponent', () => {
  let component: BoiteLettreDetailsComponent;
  let fixture: ComponentFixture<BoiteLettreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoiteLettreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteLettreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
