import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <div class="search-box">
      <input
      type="text"
      class="form-control"
      placeholder="Search for gifs"
      (keyup.enter)="searchTag()"
      #txtTagInput
      >
    </div>
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public txtTagInput!: ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) { }

  searchTag() {
    const newTag = this.txtTagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.txtTagInput.nativeElement.value = ''
  }

}
