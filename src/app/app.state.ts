import { Action, State, StateContext } from '@ngxs/store';
import { HideErrorAction, RestartAction, SetCountAction, SetNameAction, ShowErrorAction } from './app.actions';
import { RemoveAllStickersAction } from './sticker-book/sticker-book.actions';

export interface AppStateModel {
  name: string;
  count: number;
  error: string;
}

const defaultAppState: AppStateModel = {
  name: '',
  count: 0,
  error: null
};

@State<AppStateModel>({
  name: 'AppState',
  defaults: defaultAppState
})
export class AppState {
  @Action(SetNameAction)
  setName({ patchState }: StateContext<AppStateModel>, { payload }: SetNameAction) {
    patchState({ name: payload });
  }

  @Action(SetCountAction)
  setCount({ patchState }: StateContext<AppStateModel>, { payload }: SetCountAction) {
    patchState({ count: payload });
  }

  @Action(ShowErrorAction)
  showError({ patchState, dispatch }: StateContext<AppStateModel>, { payload }: ShowErrorAction) {
    const errorMessage = `${payload.name} is already in your collection`;

    patchState({ error: errorMessage });
  }

  @Action(HideErrorAction)
  hideError({ patchState }: StateContext<AppStateModel>) {
    patchState({ error: null })
  }

  @Action(RestartAction)
  restart({ setState, dispatch }: StateContext<AppStateModel>) {
    dispatch(new RemoveAllStickersAction());

    setState(defaultAppState);
  }
}
