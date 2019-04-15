import {Injectable, Injector} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Entry} from './entry.model';
import {catchError, flatMap, map} from 'rxjs/operators';
import {CategoryService} from '../../categories/shared/category.service';
import {BaseResourceService} from '../../../shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

  constructor(protected injector: Injector, private categoryService: CategoryService) {
    super('api/entries', injector, Entry.fromJson);
  }

  create(entry: Entry): Observable<Entry> {
     return this.setCategoryAndSendToServer(entry, super.create.bind(this));
  }

  update(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.update.bind(this));
  }

  private setCategoryAndSendToServer(entry: Entry, sendFn: any): Observable<Entry>{
    return this.categoryService.getById(entry.categoryId).pipe(
      flatMap(category => {
        entry.category = category;
        return sendFn(entry);
      }),
      catchError(this.handleError)
    );
    // Quando usar api direto do banco
    // return this.http.post(this.apiPath, entry).pipe(
    //   catchError(this.handleError),
    //   map(this.jsonDataToEntry)
    // );
  }
}
