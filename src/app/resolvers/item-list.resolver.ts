import { ItemListService } from './../services/item-list.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ItemListResolver implements Resolve<boolean> {

  constructor(private itemListService: ItemListService,
    private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    // return this.itemListService.fetchItems().pipe(
    //   catchError(() => {
    //     window.alert("Error occured during fetching items");
    //     return of(null);
    //   }
    //   )
    // )
    return of(null);
  }
}
