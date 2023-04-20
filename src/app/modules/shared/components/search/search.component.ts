import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'alto-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() placeholder = 'Search';
  /**
   * To avoid server clog when a request is connected to the search
   */
  @Input() debounceTime = 750;
  @Output() searchChange = new EventEmitter<string>();

  timeOut: any;

  searchReq(value: string) {
    clearTimeout(this.timeOut);
    this.timeOut = setTimeout(() => {
      this.searchChange.emit(value);
    }, this.debounceTime);
  }
}