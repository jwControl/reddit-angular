import { PagingOptions } from './../models/paging-options';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';


const redditDataUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ItemListService {


  constructor(private http: HttpClient) { }

  fetchItems(pagingOptions: PagingOptions) {
    let params: HttpParams = new HttpParams({
      fromObject: {
        limit: pagingOptions.limit != null ? pagingOptions.limit : 10,
      }
    });
    if (pagingOptions.after) {
      params = params.append('after', pagingOptions.after);
    }
    if (pagingOptions.before) {
      params = params.append('before', pagingOptions.before);
    }
    if (pagingOptions.count) {
      params = params.append('count', pagingOptions.count);
    }

    return this.http.get<any>(redditDataUrl + 'poland.json', { params }).pipe(
      map(x => {
        return {
          after: x.data.after,
          before: x.data.before,
          items: x.data.children.map(d => {
            return {
              id: d.data.id,
              name: d.data.name,
              title: d.data.title,
              created: d.data.created,
              num_comments: d.data.num_comments,
              author: d.data.author,
              score: d.data.score,
              selftext: d.data.selftext,
              thumbnail: d.data.thumbnail,
            }
          })
        }
      }));
  }
}
