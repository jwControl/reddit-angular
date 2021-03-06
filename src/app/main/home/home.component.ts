import { ItemListService } from './../../services/item-list.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { PagingOptions } from 'src/app/models/paging-options';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  fetchedItems$: Observable<Item[]>;
  limit: number = 10;
  count: number = 0;
  pagingOptions = new PagingOptions();
  constructor(private itemsService: ItemListService) { }

  ngOnInit(): void {
    //first fetching data with default page limit
    this.retrieveData(this.pagingOptions);
  }

  handleLimitPageChange($event: number) {
    // create new object in order to pass only page limit 
    const paging = new PagingOptions();
    paging.limit = $event;
    this.limit = $event;
    this.retrieveData(paging);
  }

  handlePagingOptionsChange($event: any) {
    this.count = $event.count;
    this.pagingOptions.limit = $event.limit;
    this.pagingOptions.after = $event.after;
    this.pagingOptions.before = $event.before;
    this.pagingOptions.count = $event.count;
    this.retrieveData(this.pagingOptions);
  }

  private retrieveData(pagingOptions: PagingOptions) {
    this.fetchedItems$ = this.itemsService.fetchItems(pagingOptions).pipe(
      catchError(() => {
        window.alert("Error occured during fetching items");
        return of(null);
      }
      ));
  }

}
