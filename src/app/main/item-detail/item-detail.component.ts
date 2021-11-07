import { Component, OnDestroy, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit, OnDestroy {
  item: Item;

  constructor() { }

  ngOnInit(): void {
    // 1st solution keep solftext in queryParams
    // this.selftext = this.route.snapshot.queryParamMap.get('selftext');

    // 2nd solution keep current selftext in localStorage 
    // get selftext from state, after page refresh get from localStorage
    if (window.history.state.item !== undefined) {
      this.item = window.history.state.item;
      localStorage.setItem('item', JSON.stringify(this.item));
    } else {
      this.item = JSON.parse(localStorage.getItem('item'));
    }

  }

  ngOnDestroy() {
    // remove item from localStorage
    localStorage.removeItem('item');
  }


}
