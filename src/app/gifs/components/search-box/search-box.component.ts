import { Component, ElementRef, ViewChild } from '@angular/core';

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

  constructor() { }

  searchTag() {
    const newTag = this.txtTagInput.nativeElement.value;
    console.log({newTag});
  }

}
