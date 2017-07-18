import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageProviderService } from './local-storage-provider.service';

describe('LocalStorageProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageProviderService]
    });
  });

  it('should ...', inject([LocalStorageProviderService], (service: LocalStorageProviderService) => {
    expect(service).toBeTruthy();
  }));
});
