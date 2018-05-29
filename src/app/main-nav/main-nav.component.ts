import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import {  StickerBookState, StickerBookStateModel } from '../sticker-book/sticker-book.state';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { map } from 'rxjs/internal/operators';
import { AppState, AppStateModel } from '../app.state';
import { HideErrorAction, RestartAction } from '../app.actions';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  @Select(AppState) app$: Observable<AppStateModel>;
  snackBarRef: MatSnackBarRef<SimpleSnackBar>;
  snackBarRefSubscription: Subscription;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private snackBar: MatSnackBar,
    private store: Store
  ) {
    this.app$
      .pipe(
        map((app: AppStateModel) => app.error)
      )
      .subscribe((error: string) => {
        if (!!this.snackBarRefSubscription && !this.snackBarRefSubscription.closed) {
          this.snackBarRefSubscription.unsubscribe();
        }

        if (error !== null) {
          this.openSnackBar(error)
        }
      })
  }

  openSnackBar(message: string) {
    this.snackBarRef = this.snackBar.open(message, 'close', { duration: 2000, verticalPosition: 'top', politeness: 'assertive' });
    this.snackBarRefSubscription = this.snackBarRef
      .afterDismissed()
      .subscribe(() => {
        this.store.dispatch(new HideErrorAction());
      });
  }

  restart () {
    this.store.dispatch(new RestartAction());
  }
}
