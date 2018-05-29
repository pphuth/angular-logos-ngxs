import { TestBed, inject } from '@angular/core/testing';

import { StickerBookService } from './sticker-book.service';

describe('StickerBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StickerBookService]
    });
  });

  it('should be created', inject([StickerBookService], (service: StickerBookService) => {
    expect(service).toBeTruthy();
  }));
});
