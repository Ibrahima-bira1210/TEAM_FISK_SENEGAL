import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteLettreComponent } from './boite-lettre.component';

describe('BoiteLettreComponent', () => {
  let component: BoiteLettreComponent;
  let fixture: ComponentFixture<BoiteLettreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoiteLettreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteLettreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
