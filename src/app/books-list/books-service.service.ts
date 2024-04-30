import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Book } from '../models/book.model';

const BOOKS: Array<Book> = [
  {
    id: '1',
    volumeInfo: {
      title: 'Book 1',
      authors: ['Author 1', 'Author 2']
    }
  },
  {
    id: '2',
    volumeInfo: {
      title: 'Book 2',
      authors: ['Author 1', 'Author 5']
    }
  },
  {
    id: '3',
    volumeInfo: {
      title: 'Book 3',
      authors: ['Author 6']
    }
  },
  {
    id: '4',
    volumeInfo: {
      title: 'Book 4',
      authors: ['Author 3', 'Author 4']
    }
  },
  {
    id: '5',
    volumeInfo: {
      title: 'Book 5',
      authors: ['Author 7', 'Author 2', 'Author 8']
    }
  }
];

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  constructor() {}

  getBooks(): Observable<Array<Book>> {
    return of(BOOKS);
  }
}
