import { State, Action, StateContext } from '@ngxs/store';
import { AddStickerAction, RemoveAllStickersAction, RemoveStickerAction } from './sticker-book.actions';
import { SetCountAction, ShowErrorAction } from '../app.actions';

export interface Sticker {
  id: number;
  name: string;
  fileName: string;
}

export interface StickerBookStateModel {
  collection: Sticker[];
}

const DefaultState = {
  collection: [],
};

@State<StickerBookStateModel>({
  name: 'StickerBook',
  defaults: DefaultState
})
export class StickerBookState {
  @Action(AddStickerAction)
  addSticker({ getState, patchState, dispatch }: StateContext<StickerBookStateModel>, { payload }: AddStickerAction) {
    const currentState = getState();
    const stickerIndex = currentState.collection.findIndex((sticker: Sticker) => {
      return sticker.id === payload.id;
    });

    if (stickerIndex === -1) {
      const newCollection = [...currentState.collection, payload];

      patchState({ collection: newCollection });

      dispatch(new SetCountAction(newCollection.length));
    } else {
      dispatch(new ShowErrorAction(payload));
    }
  }

  @Action(RemoveStickerAction)
  removeSticker({ getState, patchState, dispatch }: StateContext<StickerBookStateModel>, { payload }: RemoveStickerAction) {
    const currentState = getState();
    const newCollection = currentState.collection.filter(
      (sticker: Sticker) => sticker.id !== payload
    );

    patchState({ collection: newCollection });

    dispatch(new SetCountAction(newCollection.length));
  }

  @Action(RemoveAllStickersAction)
  removeAllStickers({ setState }: StateContext<StickerBookStateModel>) {
    setState({ collection: []});
  }
}
