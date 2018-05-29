import { StickerBookModule } from './sticker-book.module';

describe('StickerBookModule', () => {
  let stickerBookModule: StickerBookModule;

  beforeEach(() => {
    stickerBookModule = new StickerBookModule();
  });

  it('should create an instance', () => {
    expect(stickerBookModule).toBeTruthy();
  });
});
