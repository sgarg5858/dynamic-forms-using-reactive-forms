import { TestBed } from '@angular/core/testing';

import { DynamicComponentResolver } from './dynamic-component-resolver.service';

describe('DynamicComponentResolverService', () => {
  let service: DynamicComponentResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicComponentResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
