import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiUrl: string = `https://api.giphy.com/v1/gifs`
  private apiKey: string = '9whSP2rZD9iRPwEISBx741AEeBxHJmqc';
  private limit: number = 3;
  private offset: number = 0;

  constructor(private http: HttpClient) { }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(t => t !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', tag)
      .set('limit', this.limit.toString())
      .set('offset', this.offset.toString())

    this.http.get(`${this.apiUrl}/search`, { params }).subscribe((data: any) => {
      console.log(data);
    });

  }
}
