import { Injectable } from '@angular/core';
import * as mockData from '../../../mock-data/example.json';
import { Observable, of } from 'rxjs';
import { Book } from './data-table.types';

@Injectable({
  providedIn: 'root',
})
export class DataTableService {
  getData(): Observable<Book[]> {
    return of(mockData.data);
  }
  constructor() {}
}
