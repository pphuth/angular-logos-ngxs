import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { RemoveStickerAction } from './sticker-book.actions';
import { Observable } from 'rxjs/index';
import { StickerBookState, StickerBookStateModel } from './sticker-book.state';
import { AppState, AppStateModel } from '../app.state';

@Component({
  selector: 'app-sticker-book',
  templateUrl: './sticker-book.component.html',
  styleUrls: ['./sticker-book.component.css']
})
export class StickerBookComponent implements OnInit {
  @Select(AppState) app$: Observable<AppStateModel>;
  @Select(StickerBookState) stickerBook$: Observable<StickerBookStateModel>;

  constructor(private store: Store) {
  }

  ngOnInit() {
  }

  removeSticker (id: number) {
    this.store.dispatch(new RemoveStickerAction(id));
  }
}
