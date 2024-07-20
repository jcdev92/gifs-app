import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() { }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    tag = tag.toLowerCase();
    this._tagsHistory = this._tagsHistory.filter(t => t !== tag);
    if (tag.length > 0) {
      this._tagsHistory.unshift(tag);
    }
  }
}
