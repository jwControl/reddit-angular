import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  options: number[] = [5, 10, 15];
  selected: number;
  counter = 0;

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
    console.log(this.pagingOptions.count)
    this.queryParams.count = this.pagingOptions.count + this.queryParams.limit + 1;
    console.log(this.queryParams.count)
    this.changePaginationOption.emit(this.queryParams);
  }

  previousPage() {
    // get limit elements before first element of the collection
    // this.pagingOptions.before = this.items[0].name;

    // 2nd solution get limits elements with 'after' value from reddit
    this.queryParams.after = null;
    this.queryParams.limit = this.pagingOptions.limit;
    this.queryParams.before = this.pagingOptions.before;
    this.queryParams.count = this.pagingOptions.count - this.pagingOptions.limit;
    this.changePaginationOption.emit(this.queryParams);
  }

}
