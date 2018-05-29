import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Sticker } from './sticker-book.state';
import { STICKER_BOOK_DATA } from './sticker-book.data';

interface GitHubFile {
  type: string,
  encoding: string,
  size: number,
  name: string,
  path: string,
  content?: string,
  sha: string,
  url: string,
  git_url: string,
  html_url: string
  download_url: string
  _links: GitHubFileLinks
}

interface GitHubFileLinks {
  git: string
  self: string
  html: string
}

@Injectable({
  providedIn: 'root'
})
export class StickerBookService {

  constructor () {
  }

  getStickers (): Observable<Sticker[]> {
    return of(STICKER_BOOK_DATA);
  }
}
