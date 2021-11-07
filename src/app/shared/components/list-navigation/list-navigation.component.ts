import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagingOptions } from 'src/app/models/paging-options';

@Component({
  selector: 'app-list-navigation',
  templateUrl: './list-navigation.component.html',
  styleUrls: ['./list-navigation.component.scss'],
})
export class ListNavigationComponent implements OnInit {

  @Output() changePaginationOption = new EventEmitter<PagingOptions>();
  @Output() pageLimitEvent = new EventEmitter<number>();
  @Input() pagingOptions: PagingOptions;
  queryParams: PagingOptions = new PagingOptions();
  options: number[] = [5, 10, 25];
  selected: number;

  constructor() {

  }

  ngOnInit(): void {
    this.selected = this.pagingOptions.limit;
    if (!this.pagingOptions.before) { this.pagingOptions.count = 0; }
  }

  changedSelection(value: number) {
    this.pageLimitEvent.emit(value);
  }

  nextPage() {
    // 1st solution get limit elements after last element of the collection
    // this.pagingOptions.after = this.items[this.items.length - 1].name;

    // 2nd solution get limits elements with 'after' value from reddit
    this.queryParams.before = null;
    this.queryParams.limit = +this.pagingOptions.limit;
    this.queryParams.after = this.pagingOptions.after;
    this.queryParams.count = this.pagingOptions.count + this.queryParams.limit;
    this.changePaginationOption.emit(this.queryParams);
  }

  previousPage() {
    // get limit elements before first element of the collection
    // this.pagingOptions.before = this.items[0].name;

    // 2nd solution get limits elements with 'after' value from reddit
    this.queryParams.after = null;
    this.queryParams.limit = this.pagingOptions.limit;
    this.queryParams.before = this.pagingOptions.before;
    if (this.pagingOptions.count - this.queryParams.limit > this.queryParams.limit) {
      this.queryParams.count = this.pagingOptions.count - this.pagingOptions.limit;
    } else {
      this.queryParams.count = this.pagingOptions.count + 1;

    }

    this.changePaginationOption.emit(this.queryParams);
  }

}
