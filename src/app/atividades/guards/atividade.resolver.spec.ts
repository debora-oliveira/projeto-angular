import { TestBed } from '@angular/core/testing';

import { AtividadeResolver } from './atividade.resolver';

describe('AtividadeResolver', () => {
  let resolver: AtividadeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AtividadeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
