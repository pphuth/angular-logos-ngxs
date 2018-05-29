import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StickerBookRoutingModule } from "./sticker-book-routing.module";
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule, MatToolbarModule
} from "@angular/material";
import { StickerBookComponent } from './sticker-book.component';

@NgModule({
  imports: [
    CommonModule,
    StickerBookRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [StickerBookComponent]
})
export class StickerBookModule {}
