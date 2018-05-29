import { Sticker } from './sticker-book/sticker-book.state';

export class SetNameAction {
  static readonly type = "SET_NAME";
  constructor(public payload: string) {}
}

export class SetCountAction {
  static readonly type = "SET_COUNT";
  constructor(public payload: number) {}
}

export class ShowErrorAction {
  static readonly type = "SHOW_ERROR";
  constructor(public payload: Sticker) {}
}

export class HideErrorAction {
  static readonly type = "HIDE_ERROR";
}

export class RestartAction {
  static readonly type = 'RESTART_APP';
}
