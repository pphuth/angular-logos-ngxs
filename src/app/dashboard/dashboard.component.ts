import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/index';
import { Sticker } from '../sticker-book/sticker-book.state';
import { StickerBookService } from '../sticker-book/sticker-book.service';
import { Select, Store } from '@ngxs/store';
import { AddStickerAction } from '../sticker-book/sticker-book.actions';
import { SetNameAction } from '../app.actions';
import { FormControl, Validators } from '@angular/forms';
import { AppState, AppStateModel } from '../app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Select(AppState) app$: Observable<AppStateModel>;
  stickers$: Observable<Sticker[]>;
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)]
  );

  constructor(private stickerBookService: StickerBookService, private store: Store) {
    this.stickers$ = stickerBookService.getStickers();
  }

  ngOnInit() {
  }

  addSticker (sticker: Sticker) {
    this.store.dispatch(new AddStickerAction(sticker));
  }

  setName (name: string) {
    this.name.markAsTouched();

    if (!!this.name.value && this.name.valid) {
      this.store.dispatch(new SetNameAction(this.name.value))
    }
  }

  getErrorMessage() {
    return this.name.hasError('minlength') ? 'Seems a bit short, min. 3 characters' : '';
  }
}
