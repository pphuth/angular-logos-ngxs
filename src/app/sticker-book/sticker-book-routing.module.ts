import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StickerBookComponent } from './sticker-book.component';

const routes: Routes = [
  { path: '', component: StickerBookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StickerBookRoutingModule { }
