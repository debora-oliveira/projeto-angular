import { TestBed } from '@angular/core/testing';

import { TesteResolver } from './teste.resolver';

describe('TesteResolver', () => {
  let resolver: TesteResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TesteResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
