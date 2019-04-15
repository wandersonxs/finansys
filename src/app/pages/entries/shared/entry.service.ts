import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Entry} from './entry.model';
import {map, catchError, flatMap} from 'rxjs/operators';
import {element} from 'protractor';
import {CategoryService} from '../../categories/shared/category.service';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private apiPath = 'api/entries';

  constructor(private http: HttpClient, private categoryService : CategoryService) { }

  getAll(): Observable<Entry[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEntries)
    );
  }

  create( entry: Entry): Observable<Entry> {

    // Apenas para o in-memory-database, por causa do relacionamento.
    return this.categoryService.getById(entry.categoryId).pipe (
      flatMap(category => {
        entry.category = category;
        return this.http.post(this.apiPath, entry).pipe(
          catchError(this.handleError),
          map(this.jsonDataToEntry)
        );
      })
    );
    // Quando usar api direto do banco
    // return this.http.post(this.apiPath, entry).pipe(
    //   catchError(this.handleError),
    //   map(this.jsonDataToEntry)
    // );
  }

  update( entry: Entry): Observable<Entry> {
    const url =  `${this.apiPath}/${entry.id}`;

    // Quando usar api direto do banco
    return this.categoryService.getById(entry.categoryId).pipe (
      flatMap(category => {
        entry.category = category;
        return this.http.put(url, entry).pipe(
          catchError(this.handleError),
          map(() => entry)
        );
      })
    );

    // Quando usar api direto do banco
    // return this.http.put(url, entry).pipe(
    //   catchError(this.handleError),
    //   map(() => entry)
    // );
  }

  delete(id: number): Observable<any> {
    const url =  `${this.apiPath}/${id}`;
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }

  getById(id: number): Observable<Entry> {
    const url = `${this.apiPath}/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToEntry)
    );
  }

  // PRIVATE METHODS
  private jsonDataToEntries(jsonData: any[]): Entry[] {
    const entries: Entry[] = [];
    //jsonData.forEach(element => entries.push(element as Entry));
    jsonData.forEach( element => {
      const entry = Object.assign(new Entry(), element);
      entries.push(entry);
    });
    return entries;
  }

  private jsonDataToEntry(jsonData: any): Entry {
    //return jsonData as Entry;
    return Object.assign(new Entry(), jsonData);
  }

  private handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO => ', error);
    return throwError(error);
  }
}
