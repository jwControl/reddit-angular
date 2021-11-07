import { PagingOptions } from 'src/app/models/paging-options';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {


  @Output() pagingOptionsEvent = new EventEmitter<PagingOptions>();
  @Output() pageLimitEvent = new EventEmitter<number>();

  @Input() items: Item[];
  @Input() after: string;
  @Input() before: string;
  @Input() limit: number;
  @Input() count: number;
  pagingOptions: PagingOptions = new PagingOptions();
  constructor() { }

  ngOnInit(): void {

    // create new pagingOptions object from inputs to pass to nav component
    this.pagingOptions.limit = this.limit;
    this.pagingOptions.after = this.after;
    this.pagingOptions.before = this.before;
    this.pagingOptions.count = this.count;
  }

  handlePageLimit($event: number) {
    this.pageLimitEvent.emit($event);
  }

  handlePaginationChange($event: PagingOptions) {
    this.pagingOptionsEvent.emit($event);
  }
}
