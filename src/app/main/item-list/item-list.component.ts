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
    this.pagingOptions.limit = this.limit;
    this.pagingOptions.after = this.after;
    this.pagingOptions.before = this.before;
    this.pagingOptions.count = this.count;
  }

  handlePageLimit($event: number) {
    console.log($event)
    this.pageLimitEvent.emit($event);
  }

  handleChange($event: PagingOptions) {
    console.log($event.before, this.items[0]?.name)
    this.pagingOptionsEvent.emit($event);
  }
}