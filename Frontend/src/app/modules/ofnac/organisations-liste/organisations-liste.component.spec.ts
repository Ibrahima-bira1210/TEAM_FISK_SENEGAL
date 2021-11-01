import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationsListeComponent } from './organisations-liste.component';

describe('OrganisationsListeComponent', () => {
  let component: OrganisationsListeComponent;
  let fixture: ComponentFixture<OrganisationsListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationsListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
