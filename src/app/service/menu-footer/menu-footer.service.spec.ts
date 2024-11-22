import { TestBed } from '@angular/core/testing';

import { MenuFooterService } from './menu-footer.service';

describe('MenuFooterService', () => {
  let service: MenuFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
