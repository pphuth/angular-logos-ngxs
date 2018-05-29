import { Sticker } from "./sticker-book.state";

export class AddStickerAction {
  static readonly type = "ADD_STICKER";
  constructor(public payload: Sticker) {}
}

export class RemoveStickerAction {
  static readonly type = "REMOVE_STICKER";
  constructor(public payload: number) {}
}

export class RemoveAllStickersAction {
  static readonly type = "REMOVE_ALL";
}
