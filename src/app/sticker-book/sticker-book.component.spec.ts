import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickerBookComponent } from './sticker-book.component';

describe('StickerBookComponent', () => {
  let component: StickerBookComponent;
  let fixture: ComponentFixture<StickerBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickerBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickerBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
