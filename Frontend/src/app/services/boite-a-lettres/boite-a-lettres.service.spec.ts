import { TestBed } from '@angular/core/testing';

import { BoiteALettresService } from './boite-a-lettres.service';

describe('BoiteALettresService', () => {
  let service: BoiteALettresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoiteALettresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
